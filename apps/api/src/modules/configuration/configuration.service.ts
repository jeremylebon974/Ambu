import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SaveConfigurationDto } from './dto/configuration.dto';

@Injectable()
export class ConfigurationService {
  private readonly logger = new Logger(ConfigurationService.name);

  constructor(private prisma: PrismaService) {}

  async saveConfiguration(dto: SaveConfigurationDto, organizationId: string): Promise<void> {
    this.logger.log(`Sauvegarde configuration — org: ${organizationId}`);

    await this.prisma.organization.update({
      where: { id: organizationId },
      data: {
        metadata: dto as any,
      },
    });

    this.logger.log('Configuration sauvegardée avec succès');
  }

  async getConfiguration(organizationId: string): Promise<any> {
    const org = await this.prisma.organization.findUnique({
      where: { id: organizationId },
      select: { metadata: true, name: true },
    });

    if (!org?.metadata) {
      return this.getDefaultConfiguration();
    }

    return org.metadata;
  }

  private getDefaultConfiguration() {
    return {
      codes: [
        { code: 'AC', label: 'Activité Continue', couleur: '#14B8A6', description: 'Journée normale de travail' },
        { code: 'PJ', label: 'Permanence Jour', couleur: '#3B82F6', description: 'Poste de jour' },
        { code: 'PN', label: 'Permanence Nuit', couleur: '#8B5CF6', description: 'Poste de nuit' },
        { code: 'RH', label: 'Repos Hebdomadaire', couleur: '#6B7A99', description: 'Repos légal 35h' },
        { code: 'CP', label: 'Congé Payé', couleur: '#F59E0B', description: 'Congé payé annuel' },
        { code: 'CA', label: 'Congé Annuel', couleur: '#F97316', description: 'Congé annuel planifié' },
        { code: 'CF', label: 'Congé Formation', couleur: '#A78BFA', description: 'Formation professionnelle' },
        { code: 'CS', label: 'Congé Sans Solde', couleur: '#EC4899', description: 'Congé non rémunéré' },
        { code: 'AM', label: 'Arrêt Maladie', couleur: '#EF4444', description: 'Arrêt médical' },
        { code: 'FO', label: 'Formation', couleur: '#22C55E', description: 'Formation interne ou externe' },
      ],
      horaires: [],
      vehicules: [],
      legal: {
        reposQuotidienMin: 11,
        reposHebdoMin: 35,
        amplitudeMax: 12,
        heuresMaxSemaine: 48,
        heuresMinSemaine: 35,
        pauseMinimale: 30,
        majorationNuit: 25,
        majorationDimanche: 25,
        majorationFerie: 100,
      },
    };
  }
}
