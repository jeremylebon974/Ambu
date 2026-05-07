import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type PrescriptionModel = runtime.Types.Result.DefaultSelection<Prisma.$PrescriptionPayload>;
export type AggregatePrescription = {
    _count: PrescriptionCountAggregateOutputType | null;
    _min: PrescriptionMinAggregateOutputType | null;
    _max: PrescriptionMaxAggregateOutputType | null;
};
export type PrescriptionMinAggregateOutputType = {
    id: string | null;
    medication: string | null;
    dosage: string | null;
    frequency: string | null;
    startDate: Date | null;
    endDate: Date | null;
    doctorName: string | null;
    notes: string | null;
    isActive: boolean | null;
    patientId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PrescriptionMaxAggregateOutputType = {
    id: string | null;
    medication: string | null;
    dosage: string | null;
    frequency: string | null;
    startDate: Date | null;
    endDate: Date | null;
    doctorName: string | null;
    notes: string | null;
    isActive: boolean | null;
    patientId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PrescriptionCountAggregateOutputType = {
    id: number;
    medication: number;
    dosage: number;
    frequency: number;
    startDate: number;
    endDate: number;
    doctorName: number;
    notes: number;
    isActive: number;
    patientId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PrescriptionMinAggregateInputType = {
    id?: true;
    medication?: true;
    dosage?: true;
    frequency?: true;
    startDate?: true;
    endDate?: true;
    doctorName?: true;
    notes?: true;
    isActive?: true;
    patientId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PrescriptionMaxAggregateInputType = {
    id?: true;
    medication?: true;
    dosage?: true;
    frequency?: true;
    startDate?: true;
    endDate?: true;
    doctorName?: true;
    notes?: true;
    isActive?: true;
    patientId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PrescriptionCountAggregateInputType = {
    id?: true;
    medication?: true;
    dosage?: true;
    frequency?: true;
    startDate?: true;
    endDate?: true;
    doctorName?: true;
    notes?: true;
    isActive?: true;
    patientId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PrescriptionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrescriptionWhereInput;
    orderBy?: Prisma.PrescriptionOrderByWithRelationInput | Prisma.PrescriptionOrderByWithRelationInput[];
    cursor?: Prisma.PrescriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PrescriptionCountAggregateInputType;
    _min?: PrescriptionMinAggregateInputType;
    _max?: PrescriptionMaxAggregateInputType;
};
export type GetPrescriptionAggregateType<T extends PrescriptionAggregateArgs> = {
    [P in keyof T & keyof AggregatePrescription]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePrescription[P]> : Prisma.GetScalarType<T[P], AggregatePrescription[P]>;
};
export type PrescriptionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrescriptionWhereInput;
    orderBy?: Prisma.PrescriptionOrderByWithAggregationInput | Prisma.PrescriptionOrderByWithAggregationInput[];
    by: Prisma.PrescriptionScalarFieldEnum[] | Prisma.PrescriptionScalarFieldEnum;
    having?: Prisma.PrescriptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PrescriptionCountAggregateInputType | true;
    _min?: PrescriptionMinAggregateInputType;
    _max?: PrescriptionMaxAggregateInputType;
};
export type PrescriptionGroupByOutputType = {
    id: string;
    medication: string;
    dosage: string | null;
    frequency: string | null;
    startDate: Date | null;
    endDate: Date | null;
    doctorName: string | null;
    notes: string | null;
    isActive: boolean;
    patientId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: PrescriptionCountAggregateOutputType | null;
    _min: PrescriptionMinAggregateOutputType | null;
    _max: PrescriptionMaxAggregateOutputType | null;
};
export type GetPrescriptionGroupByPayload<T extends PrescriptionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PrescriptionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PrescriptionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PrescriptionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PrescriptionGroupByOutputType[P]>;
}>>;
export type PrescriptionWhereInput = {
    AND?: Prisma.PrescriptionWhereInput | Prisma.PrescriptionWhereInput[];
    OR?: Prisma.PrescriptionWhereInput[];
    NOT?: Prisma.PrescriptionWhereInput | Prisma.PrescriptionWhereInput[];
    id?: Prisma.StringFilter<"Prescription"> | string;
    medication?: Prisma.StringFilter<"Prescription"> | string;
    dosage?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    frequency?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    startDate?: Prisma.DateTimeNullableFilter<"Prescription"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableFilter<"Prescription"> | Date | string | null;
    doctorName?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    notes?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    isActive?: Prisma.BoolFilter<"Prescription"> | boolean;
    patientId?: Prisma.StringFilter<"Prescription"> | string;
    createdAt?: Prisma.DateTimeFilter<"Prescription"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Prescription"> | Date | string;
    patient?: Prisma.XOR<Prisma.PatientScalarRelationFilter, Prisma.PatientWhereInput>;
};
export type PrescriptionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    medication?: Prisma.SortOrder;
    dosage?: Prisma.SortOrderInput | Prisma.SortOrder;
    frequency?: Prisma.SortOrderInput | Prisma.SortOrder;
    startDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    doctorName?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    patient?: Prisma.PatientOrderByWithRelationInput;
};
export type PrescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PrescriptionWhereInput | Prisma.PrescriptionWhereInput[];
    OR?: Prisma.PrescriptionWhereInput[];
    NOT?: Prisma.PrescriptionWhereInput | Prisma.PrescriptionWhereInput[];
    medication?: Prisma.StringFilter<"Prescription"> | string;
    dosage?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    frequency?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    startDate?: Prisma.DateTimeNullableFilter<"Prescription"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableFilter<"Prescription"> | Date | string | null;
    doctorName?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    notes?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    isActive?: Prisma.BoolFilter<"Prescription"> | boolean;
    patientId?: Prisma.StringFilter<"Prescription"> | string;
    createdAt?: Prisma.DateTimeFilter<"Prescription"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Prescription"> | Date | string;
    patient?: Prisma.XOR<Prisma.PatientScalarRelationFilter, Prisma.PatientWhereInput>;
}, "id">;
export type PrescriptionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    medication?: Prisma.SortOrder;
    dosage?: Prisma.SortOrderInput | Prisma.SortOrder;
    frequency?: Prisma.SortOrderInput | Prisma.SortOrder;
    startDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    doctorName?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PrescriptionCountOrderByAggregateInput;
    _max?: Prisma.PrescriptionMaxOrderByAggregateInput;
    _min?: Prisma.PrescriptionMinOrderByAggregateInput;
};
export type PrescriptionScalarWhereWithAggregatesInput = {
    AND?: Prisma.PrescriptionScalarWhereWithAggregatesInput | Prisma.PrescriptionScalarWhereWithAggregatesInput[];
    OR?: Prisma.PrescriptionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PrescriptionScalarWhereWithAggregatesInput | Prisma.PrescriptionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Prescription"> | string;
    medication?: Prisma.StringWithAggregatesFilter<"Prescription"> | string;
    dosage?: Prisma.StringNullableWithAggregatesFilter<"Prescription"> | string | null;
    frequency?: Prisma.StringNullableWithAggregatesFilter<"Prescription"> | string | null;
    startDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Prescription"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Prescription"> | Date | string | null;
    doctorName?: Prisma.StringNullableWithAggregatesFilter<"Prescription"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Prescription"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Prescription"> | boolean;
    patientId?: Prisma.StringWithAggregatesFilter<"Prescription"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Prescription"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Prescription"> | Date | string;
};
export type PrescriptionCreateInput = {
    id?: string;
    medication: string;
    dosage?: string | null;
    frequency?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    doctorName?: string | null;
    notes?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patient: Prisma.PatientCreateNestedOneWithoutPrescriptionsInput;
};
export type PrescriptionUncheckedCreateInput = {
    id?: string;
    medication: string;
    dosage?: string | null;
    frequency?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    doctorName?: string | null;
    notes?: string | null;
    isActive?: boolean;
    patientId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PrescriptionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    medication?: Prisma.StringFieldUpdateOperationsInput | string;
    dosage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    doctorName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.PatientUpdateOneRequiredWithoutPrescriptionsNestedInput;
};
export type PrescriptionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    medication?: Prisma.StringFieldUpdateOperationsInput | string;
    dosage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    doctorName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrescriptionCreateManyInput = {
    id?: string;
    medication: string;
    dosage?: string | null;
    frequency?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    doctorName?: string | null;
    notes?: string | null;
    isActive?: boolean;
    patientId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PrescriptionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    medication?: Prisma.StringFieldUpdateOperationsInput | string;
    dosage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    doctorName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrescriptionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    medication?: Prisma.StringFieldUpdateOperationsInput | string;
    dosage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    doctorName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrescriptionListRelationFilter = {
    every?: Prisma.PrescriptionWhereInput;
    some?: Prisma.PrescriptionWhereInput;
    none?: Prisma.PrescriptionWhereInput;
};
export type PrescriptionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PrescriptionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    medication?: Prisma.SortOrder;
    dosage?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    doctorName?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PrescriptionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    medication?: Prisma.SortOrder;
    dosage?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    doctorName?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PrescriptionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    medication?: Prisma.SortOrder;
    dosage?: Prisma.SortOrder;
    frequency?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    doctorName?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PrescriptionCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.PrescriptionCreateWithoutPatientInput, Prisma.PrescriptionUncheckedCreateWithoutPatientInput> | Prisma.PrescriptionCreateWithoutPatientInput[] | Prisma.PrescriptionUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.PrescriptionCreateOrConnectWithoutPatientInput | Prisma.PrescriptionCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.PrescriptionCreateManyPatientInputEnvelope;
    connect?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
};
export type PrescriptionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.PrescriptionCreateWithoutPatientInput, Prisma.PrescriptionUncheckedCreateWithoutPatientInput> | Prisma.PrescriptionCreateWithoutPatientInput[] | Prisma.PrescriptionUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.PrescriptionCreateOrConnectWithoutPatientInput | Prisma.PrescriptionCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.PrescriptionCreateManyPatientInputEnvelope;
    connect?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
};
export type PrescriptionUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.PrescriptionCreateWithoutPatientInput, Prisma.PrescriptionUncheckedCreateWithoutPatientInput> | Prisma.PrescriptionCreateWithoutPatientInput[] | Prisma.PrescriptionUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.PrescriptionCreateOrConnectWithoutPatientInput | Prisma.PrescriptionCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.PrescriptionUpsertWithWhereUniqueWithoutPatientInput | Prisma.PrescriptionUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.PrescriptionCreateManyPatientInputEnvelope;
    set?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    disconnect?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    delete?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    connect?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    update?: Prisma.PrescriptionUpdateWithWhereUniqueWithoutPatientInput | Prisma.PrescriptionUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.PrescriptionUpdateManyWithWhereWithoutPatientInput | Prisma.PrescriptionUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.PrescriptionScalarWhereInput | Prisma.PrescriptionScalarWhereInput[];
};
export type PrescriptionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.PrescriptionCreateWithoutPatientInput, Prisma.PrescriptionUncheckedCreateWithoutPatientInput> | Prisma.PrescriptionCreateWithoutPatientInput[] | Prisma.PrescriptionUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.PrescriptionCreateOrConnectWithoutPatientInput | Prisma.PrescriptionCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.PrescriptionUpsertWithWhereUniqueWithoutPatientInput | Prisma.PrescriptionUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.PrescriptionCreateManyPatientInputEnvelope;
    set?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    disconnect?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    delete?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    connect?: Prisma.PrescriptionWhereUniqueInput | Prisma.PrescriptionWhereUniqueInput[];
    update?: Prisma.PrescriptionUpdateWithWhereUniqueWithoutPatientInput | Prisma.PrescriptionUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.PrescriptionUpdateManyWithWhereWithoutPatientInput | Prisma.PrescriptionUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.PrescriptionScalarWhereInput | Prisma.PrescriptionScalarWhereInput[];
};
export type PrescriptionCreateWithoutPatientInput = {
    id?: string;
    medication: string;
    dosage?: string | null;
    frequency?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    doctorName?: string | null;
    notes?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PrescriptionUncheckedCreateWithoutPatientInput = {
    id?: string;
    medication: string;
    dosage?: string | null;
    frequency?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    doctorName?: string | null;
    notes?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PrescriptionCreateOrConnectWithoutPatientInput = {
    where: Prisma.PrescriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrescriptionCreateWithoutPatientInput, Prisma.PrescriptionUncheckedCreateWithoutPatientInput>;
};
export type PrescriptionCreateManyPatientInputEnvelope = {
    data: Prisma.PrescriptionCreateManyPatientInput | Prisma.PrescriptionCreateManyPatientInput[];
    skipDuplicates?: boolean;
};
export type PrescriptionUpsertWithWhereUniqueWithoutPatientInput = {
    where: Prisma.PrescriptionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PrescriptionUpdateWithoutPatientInput, Prisma.PrescriptionUncheckedUpdateWithoutPatientInput>;
    create: Prisma.XOR<Prisma.PrescriptionCreateWithoutPatientInput, Prisma.PrescriptionUncheckedCreateWithoutPatientInput>;
};
export type PrescriptionUpdateWithWhereUniqueWithoutPatientInput = {
    where: Prisma.PrescriptionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PrescriptionUpdateWithoutPatientInput, Prisma.PrescriptionUncheckedUpdateWithoutPatientInput>;
};
export type PrescriptionUpdateManyWithWhereWithoutPatientInput = {
    where: Prisma.PrescriptionScalarWhereInput;
    data: Prisma.XOR<Prisma.PrescriptionUpdateManyMutationInput, Prisma.PrescriptionUncheckedUpdateManyWithoutPatientInput>;
};
export type PrescriptionScalarWhereInput = {
    AND?: Prisma.PrescriptionScalarWhereInput | Prisma.PrescriptionScalarWhereInput[];
    OR?: Prisma.PrescriptionScalarWhereInput[];
    NOT?: Prisma.PrescriptionScalarWhereInput | Prisma.PrescriptionScalarWhereInput[];
    id?: Prisma.StringFilter<"Prescription"> | string;
    medication?: Prisma.StringFilter<"Prescription"> | string;
    dosage?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    frequency?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    startDate?: Prisma.DateTimeNullableFilter<"Prescription"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableFilter<"Prescription"> | Date | string | null;
    doctorName?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    notes?: Prisma.StringNullableFilter<"Prescription"> | string | null;
    isActive?: Prisma.BoolFilter<"Prescription"> | boolean;
    patientId?: Prisma.StringFilter<"Prescription"> | string;
    createdAt?: Prisma.DateTimeFilter<"Prescription"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Prescription"> | Date | string;
};
export type PrescriptionCreateManyPatientInput = {
    id?: string;
    medication: string;
    dosage?: string | null;
    frequency?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    doctorName?: string | null;
    notes?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PrescriptionUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    medication?: Prisma.StringFieldUpdateOperationsInput | string;
    dosage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    doctorName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrescriptionUncheckedUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    medication?: Prisma.StringFieldUpdateOperationsInput | string;
    dosage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    doctorName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrescriptionUncheckedUpdateManyWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    medication?: Prisma.StringFieldUpdateOperationsInput | string;
    dosage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    frequency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    doctorName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrescriptionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    medication?: boolean;
    dosage?: boolean;
    frequency?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    doctorName?: boolean;
    notes?: boolean;
    isActive?: boolean;
    patientId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prescription"]>;
export type PrescriptionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    medication?: boolean;
    dosage?: boolean;
    frequency?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    doctorName?: boolean;
    notes?: boolean;
    isActive?: boolean;
    patientId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prescription"]>;
export type PrescriptionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    medication?: boolean;
    dosage?: boolean;
    frequency?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    doctorName?: boolean;
    notes?: boolean;
    isActive?: boolean;
    patientId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prescription"]>;
export type PrescriptionSelectScalar = {
    id?: boolean;
    medication?: boolean;
    dosage?: boolean;
    frequency?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    doctorName?: boolean;
    notes?: boolean;
    isActive?: boolean;
    patientId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PrescriptionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "medication" | "dosage" | "frequency" | "startDate" | "endDate" | "doctorName" | "notes" | "isActive" | "patientId" | "createdAt" | "updatedAt", ExtArgs["result"]["prescription"]>;
export type PrescriptionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
};
export type PrescriptionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
};
export type PrescriptionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
};
export type $PrescriptionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Prescription";
    objects: {
        patient: Prisma.$PatientPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        medication: string;
        dosage: string | null;
        frequency: string | null;
        startDate: Date | null;
        endDate: Date | null;
        doctorName: string | null;
        notes: string | null;
        isActive: boolean;
        patientId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["prescription"]>;
    composites: {};
};
export type PrescriptionGetPayload<S extends boolean | null | undefined | PrescriptionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload, S>;
export type PrescriptionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PrescriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PrescriptionCountAggregateInputType | true;
};
export interface PrescriptionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Prescription'];
        meta: {
            name: 'Prescription';
        };
    };
    findUnique<T extends PrescriptionFindUniqueArgs>(args: Prisma.SelectSubset<T, PrescriptionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PrescriptionClient<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PrescriptionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PrescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrescriptionClient<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PrescriptionFindFirstArgs>(args?: Prisma.SelectSubset<T, PrescriptionFindFirstArgs<ExtArgs>>): Prisma.Prisma__PrescriptionClient<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PrescriptionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PrescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrescriptionClient<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PrescriptionFindManyArgs>(args?: Prisma.SelectSubset<T, PrescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PrescriptionCreateArgs>(args: Prisma.SelectSubset<T, PrescriptionCreateArgs<ExtArgs>>): Prisma.Prisma__PrescriptionClient<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PrescriptionCreateManyArgs>(args?: Prisma.SelectSubset<T, PrescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PrescriptionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PrescriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PrescriptionDeleteArgs>(args: Prisma.SelectSubset<T, PrescriptionDeleteArgs<ExtArgs>>): Prisma.Prisma__PrescriptionClient<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PrescriptionUpdateArgs>(args: Prisma.SelectSubset<T, PrescriptionUpdateArgs<ExtArgs>>): Prisma.Prisma__PrescriptionClient<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PrescriptionDeleteManyArgs>(args?: Prisma.SelectSubset<T, PrescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PrescriptionUpdateManyArgs>(args: Prisma.SelectSubset<T, PrescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PrescriptionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PrescriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PrescriptionUpsertArgs>(args: Prisma.SelectSubset<T, PrescriptionUpsertArgs<ExtArgs>>): Prisma.Prisma__PrescriptionClient<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PrescriptionCountArgs>(args?: Prisma.Subset<T, PrescriptionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PrescriptionCountAggregateOutputType> : number>;
    aggregate<T extends PrescriptionAggregateArgs>(args: Prisma.Subset<T, PrescriptionAggregateArgs>): Prisma.PrismaPromise<GetPrescriptionAggregateType<T>>;
    groupBy<T extends PrescriptionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PrescriptionGroupByArgs['orderBy'];
    } : {
        orderBy?: PrescriptionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PrescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PrescriptionFieldRefs;
}
export interface Prisma__PrescriptionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    patient<T extends Prisma.PatientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientDefaultArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PrescriptionFieldRefs {
    readonly id: Prisma.FieldRef<"Prescription", 'String'>;
    readonly medication: Prisma.FieldRef<"Prescription", 'String'>;
    readonly dosage: Prisma.FieldRef<"Prescription", 'String'>;
    readonly frequency: Prisma.FieldRef<"Prescription", 'String'>;
    readonly startDate: Prisma.FieldRef<"Prescription", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"Prescription", 'DateTime'>;
    readonly doctorName: Prisma.FieldRef<"Prescription", 'String'>;
    readonly notes: Prisma.FieldRef<"Prescription", 'String'>;
    readonly isActive: Prisma.FieldRef<"Prescription", 'Boolean'>;
    readonly patientId: Prisma.FieldRef<"Prescription", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Prescription", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Prescription", 'DateTime'>;
}
export type PrescriptionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    include?: Prisma.PrescriptionInclude<ExtArgs> | null;
    where: Prisma.PrescriptionWhereUniqueInput;
};
export type PrescriptionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    include?: Prisma.PrescriptionInclude<ExtArgs> | null;
    where: Prisma.PrescriptionWhereUniqueInput;
};
export type PrescriptionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    include?: Prisma.PrescriptionInclude<ExtArgs> | null;
    where?: Prisma.PrescriptionWhereInput;
    orderBy?: Prisma.PrescriptionOrderByWithRelationInput | Prisma.PrescriptionOrderByWithRelationInput[];
    cursor?: Prisma.PrescriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrescriptionScalarFieldEnum | Prisma.PrescriptionScalarFieldEnum[];
};
export type PrescriptionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    include?: Prisma.PrescriptionInclude<ExtArgs> | null;
    where?: Prisma.PrescriptionWhereInput;
    orderBy?: Prisma.PrescriptionOrderByWithRelationInput | Prisma.PrescriptionOrderByWithRelationInput[];
    cursor?: Prisma.PrescriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrescriptionScalarFieldEnum | Prisma.PrescriptionScalarFieldEnum[];
};
export type PrescriptionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    include?: Prisma.PrescriptionInclude<ExtArgs> | null;
    where?: Prisma.PrescriptionWhereInput;
    orderBy?: Prisma.PrescriptionOrderByWithRelationInput | Prisma.PrescriptionOrderByWithRelationInput[];
    cursor?: Prisma.PrescriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrescriptionScalarFieldEnum | Prisma.PrescriptionScalarFieldEnum[];
};
export type PrescriptionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    include?: Prisma.PrescriptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PrescriptionCreateInput, Prisma.PrescriptionUncheckedCreateInput>;
};
export type PrescriptionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PrescriptionCreateManyInput | Prisma.PrescriptionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PrescriptionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    data: Prisma.PrescriptionCreateManyInput | Prisma.PrescriptionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PrescriptionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PrescriptionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    include?: Prisma.PrescriptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PrescriptionUpdateInput, Prisma.PrescriptionUncheckedUpdateInput>;
    where: Prisma.PrescriptionWhereUniqueInput;
};
export type PrescriptionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PrescriptionUpdateManyMutationInput, Prisma.PrescriptionUncheckedUpdateManyInput>;
    where?: Prisma.PrescriptionWhereInput;
    limit?: number;
};
export type PrescriptionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PrescriptionUpdateManyMutationInput, Prisma.PrescriptionUncheckedUpdateManyInput>;
    where?: Prisma.PrescriptionWhereInput;
    limit?: number;
    include?: Prisma.PrescriptionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PrescriptionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    include?: Prisma.PrescriptionInclude<ExtArgs> | null;
    where: Prisma.PrescriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrescriptionCreateInput, Prisma.PrescriptionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PrescriptionUpdateInput, Prisma.PrescriptionUncheckedUpdateInput>;
};
export type PrescriptionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    include?: Prisma.PrescriptionInclude<ExtArgs> | null;
    where: Prisma.PrescriptionWhereUniqueInput;
};
export type PrescriptionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrescriptionWhereInput;
    limit?: number;
};
export type PrescriptionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.PrescriptionOmit<ExtArgs> | null;
    include?: Prisma.PrescriptionInclude<ExtArgs> | null;
};
