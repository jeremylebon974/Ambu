import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type VehicleModel = runtime.Types.Result.DefaultSelection<Prisma.$VehiclePayload>;
export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null;
    _min: VehicleMinAggregateOutputType | null;
    _max: VehicleMaxAggregateOutputType | null;
};
export type VehicleMinAggregateOutputType = {
    id: string | null;
    plate: string | null;
    model: string | null;
    type: string | null;
    status: $Enums.VehicleStatus | null;
    isActive: boolean | null;
    organizationId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VehicleMaxAggregateOutputType = {
    id: string | null;
    plate: string | null;
    model: string | null;
    type: string | null;
    status: $Enums.VehicleStatus | null;
    isActive: boolean | null;
    organizationId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VehicleCountAggregateOutputType = {
    id: number;
    plate: number;
    model: number;
    type: number;
    status: number;
    isActive: number;
    organizationId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type VehicleMinAggregateInputType = {
    id?: true;
    plate?: true;
    model?: true;
    type?: true;
    status?: true;
    isActive?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VehicleMaxAggregateInputType = {
    id?: true;
    plate?: true;
    model?: true;
    type?: true;
    status?: true;
    isActive?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VehicleCountAggregateInputType = {
    id?: true;
    plate?: true;
    model?: true;
    type?: true;
    status?: true;
    isActive?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type VehicleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VehicleWhereInput;
    orderBy?: Prisma.VehicleOrderByWithRelationInput | Prisma.VehicleOrderByWithRelationInput[];
    cursor?: Prisma.VehicleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VehicleCountAggregateInputType;
    _min?: VehicleMinAggregateInputType;
    _max?: VehicleMaxAggregateInputType;
};
export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
    [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVehicle[P]> : Prisma.GetScalarType<T[P], AggregateVehicle[P]>;
};
export type VehicleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VehicleWhereInput;
    orderBy?: Prisma.VehicleOrderByWithAggregationInput | Prisma.VehicleOrderByWithAggregationInput[];
    by: Prisma.VehicleScalarFieldEnum[] | Prisma.VehicleScalarFieldEnum;
    having?: Prisma.VehicleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VehicleCountAggregateInputType | true;
    _min?: VehicleMinAggregateInputType;
    _max?: VehicleMaxAggregateInputType;
};
export type VehicleGroupByOutputType = {
    id: string;
    plate: string;
    model: string;
    type: string;
    status: $Enums.VehicleStatus;
    isActive: boolean;
    organizationId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: VehicleCountAggregateOutputType | null;
    _min: VehicleMinAggregateOutputType | null;
    _max: VehicleMaxAggregateOutputType | null;
};
export type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VehicleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VehicleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VehicleGroupByOutputType[P]>;
}>>;
export type VehicleWhereInput = {
    AND?: Prisma.VehicleWhereInput | Prisma.VehicleWhereInput[];
    OR?: Prisma.VehicleWhereInput[];
    NOT?: Prisma.VehicleWhereInput | Prisma.VehicleWhereInput[];
    id?: Prisma.StringFilter<"Vehicle"> | string;
    plate?: Prisma.StringFilter<"Vehicle"> | string;
    model?: Prisma.StringFilter<"Vehicle"> | string;
    type?: Prisma.StringFilter<"Vehicle"> | string;
    status?: Prisma.EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus;
    isActive?: Prisma.BoolFilter<"Vehicle"> | boolean;
    organizationId?: Prisma.StringFilter<"Vehicle"> | string;
    createdAt?: Prisma.DateTimeFilter<"Vehicle"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Vehicle"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    crews?: Prisma.CrewListRelationFilter;
    gpsTracks?: Prisma.GpsTrackListRelationFilter;
};
export type VehicleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    plate?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    crews?: Prisma.CrewOrderByRelationAggregateInput;
    gpsTracks?: Prisma.GpsTrackOrderByRelationAggregateInput;
};
export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    plate?: string;
    AND?: Prisma.VehicleWhereInput | Prisma.VehicleWhereInput[];
    OR?: Prisma.VehicleWhereInput[];
    NOT?: Prisma.VehicleWhereInput | Prisma.VehicleWhereInput[];
    model?: Prisma.StringFilter<"Vehicle"> | string;
    type?: Prisma.StringFilter<"Vehicle"> | string;
    status?: Prisma.EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus;
    isActive?: Prisma.BoolFilter<"Vehicle"> | boolean;
    organizationId?: Prisma.StringFilter<"Vehicle"> | string;
    createdAt?: Prisma.DateTimeFilter<"Vehicle"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Vehicle"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    crews?: Prisma.CrewListRelationFilter;
    gpsTracks?: Prisma.GpsTrackListRelationFilter;
}, "id" | "plate">;
export type VehicleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    plate?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.VehicleCountOrderByAggregateInput;
    _max?: Prisma.VehicleMaxOrderByAggregateInput;
    _min?: Prisma.VehicleMinOrderByAggregateInput;
};
export type VehicleScalarWhereWithAggregatesInput = {
    AND?: Prisma.VehicleScalarWhereWithAggregatesInput | Prisma.VehicleScalarWhereWithAggregatesInput[];
    OR?: Prisma.VehicleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VehicleScalarWhereWithAggregatesInput | Prisma.VehicleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Vehicle"> | string;
    plate?: Prisma.StringWithAggregatesFilter<"Vehicle"> | string;
    model?: Prisma.StringWithAggregatesFilter<"Vehicle"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Vehicle"> | string;
    status?: Prisma.EnumVehicleStatusWithAggregatesFilter<"Vehicle"> | $Enums.VehicleStatus;
    isActive?: Prisma.BoolWithAggregatesFilter<"Vehicle"> | boolean;
    organizationId?: Prisma.StringWithAggregatesFilter<"Vehicle"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Vehicle"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Vehicle"> | Date | string;
};
export type VehicleCreateInput = {
    id?: string;
    plate: string;
    model: string;
    type: string;
    status?: $Enums.VehicleStatus;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutVehiclesInput;
    crews?: Prisma.CrewCreateNestedManyWithoutVehicleInput;
    gpsTracks?: Prisma.GpsTrackCreateNestedManyWithoutVehicleInput;
};
export type VehicleUncheckedCreateInput = {
    id?: string;
    plate: string;
    model: string;
    type: string;
    status?: $Enums.VehicleStatus;
    isActive?: boolean;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    crews?: Prisma.CrewUncheckedCreateNestedManyWithoutVehicleInput;
    gpsTracks?: Prisma.GpsTrackUncheckedCreateNestedManyWithoutVehicleInput;
};
export type VehicleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plate?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutVehiclesNestedInput;
    crews?: Prisma.CrewUpdateManyWithoutVehicleNestedInput;
    gpsTracks?: Prisma.GpsTrackUpdateManyWithoutVehicleNestedInput;
};
export type VehicleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plate?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    crews?: Prisma.CrewUncheckedUpdateManyWithoutVehicleNestedInput;
    gpsTracks?: Prisma.GpsTrackUncheckedUpdateManyWithoutVehicleNestedInput;
};
export type VehicleCreateManyInput = {
    id?: string;
    plate: string;
    model: string;
    type: string;
    status?: $Enums.VehicleStatus;
    isActive?: boolean;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VehicleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plate?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VehicleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plate?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VehicleListRelationFilter = {
    every?: Prisma.VehicleWhereInput;
    some?: Prisma.VehicleWhereInput;
    none?: Prisma.VehicleWhereInput;
};
export type VehicleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VehicleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    plate?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VehicleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    plate?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VehicleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    plate?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VehicleScalarRelationFilter = {
    is?: Prisma.VehicleWhereInput;
    isNot?: Prisma.VehicleWhereInput;
};
export type VehicleCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutOrganizationInput, Prisma.VehicleUncheckedCreateWithoutOrganizationInput> | Prisma.VehicleCreateWithoutOrganizationInput[] | Prisma.VehicleUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutOrganizationInput | Prisma.VehicleCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.VehicleCreateManyOrganizationInputEnvelope;
    connect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
};
export type VehicleUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutOrganizationInput, Prisma.VehicleUncheckedCreateWithoutOrganizationInput> | Prisma.VehicleCreateWithoutOrganizationInput[] | Prisma.VehicleUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutOrganizationInput | Prisma.VehicleCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.VehicleCreateManyOrganizationInputEnvelope;
    connect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
};
export type VehicleUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutOrganizationInput, Prisma.VehicleUncheckedCreateWithoutOrganizationInput> | Prisma.VehicleCreateWithoutOrganizationInput[] | Prisma.VehicleUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutOrganizationInput | Prisma.VehicleCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.VehicleUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.VehicleUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.VehicleCreateManyOrganizationInputEnvelope;
    set?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    disconnect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    delete?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    connect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    update?: Prisma.VehicleUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.VehicleUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.VehicleUpdateManyWithWhereWithoutOrganizationInput | Prisma.VehicleUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.VehicleScalarWhereInput | Prisma.VehicleScalarWhereInput[];
};
export type VehicleUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutOrganizationInput, Prisma.VehicleUncheckedCreateWithoutOrganizationInput> | Prisma.VehicleCreateWithoutOrganizationInput[] | Prisma.VehicleUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutOrganizationInput | Prisma.VehicleCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.VehicleUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.VehicleUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.VehicleCreateManyOrganizationInputEnvelope;
    set?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    disconnect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    delete?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    connect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    update?: Prisma.VehicleUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.VehicleUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.VehicleUpdateManyWithWhereWithoutOrganizationInput | Prisma.VehicleUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.VehicleScalarWhereInput | Prisma.VehicleScalarWhereInput[];
};
export type EnumVehicleStatusFieldUpdateOperationsInput = {
    set?: $Enums.VehicleStatus;
};
export type VehicleCreateNestedOneWithoutCrewsInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutCrewsInput, Prisma.VehicleUncheckedCreateWithoutCrewsInput>;
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutCrewsInput;
    connect?: Prisma.VehicleWhereUniqueInput;
};
export type VehicleUpdateOneRequiredWithoutCrewsNestedInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutCrewsInput, Prisma.VehicleUncheckedCreateWithoutCrewsInput>;
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutCrewsInput;
    upsert?: Prisma.VehicleUpsertWithoutCrewsInput;
    connect?: Prisma.VehicleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VehicleUpdateToOneWithWhereWithoutCrewsInput, Prisma.VehicleUpdateWithoutCrewsInput>, Prisma.VehicleUncheckedUpdateWithoutCrewsInput>;
};
export type VehicleCreateNestedOneWithoutGpsTracksInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutGpsTracksInput, Prisma.VehicleUncheckedCreateWithoutGpsTracksInput>;
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutGpsTracksInput;
    connect?: Prisma.VehicleWhereUniqueInput;
};
export type VehicleUpdateOneRequiredWithoutGpsTracksNestedInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutGpsTracksInput, Prisma.VehicleUncheckedCreateWithoutGpsTracksInput>;
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutGpsTracksInput;
    upsert?: Prisma.VehicleUpsertWithoutGpsTracksInput;
    connect?: Prisma.VehicleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VehicleUpdateToOneWithWhereWithoutGpsTracksInput, Prisma.VehicleUpdateWithoutGpsTracksInput>, Prisma.VehicleUncheckedUpdateWithoutGpsTracksInput>;
};
export type VehicleCreateWithoutOrganizationInput = {
    id?: string;
    plate: string;
    model: string;
    type: string;
    status?: $Enums.VehicleStatus;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    crews?: Prisma.CrewCreateNestedManyWithoutVehicleInput;
    gpsTracks?: Prisma.GpsTrackCreateNestedManyWithoutVehicleInput;
};
export type VehicleUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    plate: string;
    model: string;
    type: string;
    status?: $Enums.VehicleStatus;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    crews?: Prisma.CrewUncheckedCreateNestedManyWithoutVehicleInput;
    gpsTracks?: Prisma.GpsTrackUncheckedCreateNestedManyWithoutVehicleInput;
};
export type VehicleCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.VehicleWhereUniqueInput;
    create: Prisma.XOR<Prisma.VehicleCreateWithoutOrganizationInput, Prisma.VehicleUncheckedCreateWithoutOrganizationInput>;
};
export type VehicleCreateManyOrganizationInputEnvelope = {
    data: Prisma.VehicleCreateManyOrganizationInput | Prisma.VehicleCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type VehicleUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.VehicleWhereUniqueInput;
    update: Prisma.XOR<Prisma.VehicleUpdateWithoutOrganizationInput, Prisma.VehicleUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.VehicleCreateWithoutOrganizationInput, Prisma.VehicleUncheckedCreateWithoutOrganizationInput>;
};
export type VehicleUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.VehicleWhereUniqueInput;
    data: Prisma.XOR<Prisma.VehicleUpdateWithoutOrganizationInput, Prisma.VehicleUncheckedUpdateWithoutOrganizationInput>;
};
export type VehicleUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.VehicleScalarWhereInput;
    data: Prisma.XOR<Prisma.VehicleUpdateManyMutationInput, Prisma.VehicleUncheckedUpdateManyWithoutOrganizationInput>;
};
export type VehicleScalarWhereInput = {
    AND?: Prisma.VehicleScalarWhereInput | Prisma.VehicleScalarWhereInput[];
    OR?: Prisma.VehicleScalarWhereInput[];
    NOT?: Prisma.VehicleScalarWhereInput | Prisma.VehicleScalarWhereInput[];
    id?: Prisma.StringFilter<"Vehicle"> | string;
    plate?: Prisma.StringFilter<"Vehicle"> | string;
    model?: Prisma.StringFilter<"Vehicle"> | string;
    type?: Prisma.StringFilter<"Vehicle"> | string;
    status?: Prisma.EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus;
    isActive?: Prisma.BoolFilter<"Vehicle"> | boolean;
    organizationId?: Prisma.StringFilter<"Vehicle"> | string;
    createdAt?: Prisma.DateTimeFilter<"Vehicle"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Vehicle"> | Date | string;
};
export type VehicleCreateWithoutCrewsInput = {
    id?: string;
    plate: string;
    model: string;
    type: string;
    status?: $Enums.VehicleStatus;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutVehiclesInput;
    gpsTracks?: Prisma.GpsTrackCreateNestedManyWithoutVehicleInput;
};
export type VehicleUncheckedCreateWithoutCrewsInput = {
    id?: string;
    plate: string;
    model: string;
    type: string;
    status?: $Enums.VehicleStatus;
    isActive?: boolean;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gpsTracks?: Prisma.GpsTrackUncheckedCreateNestedManyWithoutVehicleInput;
};
export type VehicleCreateOrConnectWithoutCrewsInput = {
    where: Prisma.VehicleWhereUniqueInput;
    create: Prisma.XOR<Prisma.VehicleCreateWithoutCrewsInput, Prisma.VehicleUncheckedCreateWithoutCrewsInput>;
};
export type VehicleUpsertWithoutCrewsInput = {
    update: Prisma.XOR<Prisma.VehicleUpdateWithoutCrewsInput, Prisma.VehicleUncheckedUpdateWithoutCrewsInput>;
    create: Prisma.XOR<Prisma.VehicleCreateWithoutCrewsInput, Prisma.VehicleUncheckedCreateWithoutCrewsInput>;
    where?: Prisma.VehicleWhereInput;
};
export type VehicleUpdateToOneWithWhereWithoutCrewsInput = {
    where?: Prisma.VehicleWhereInput;
    data: Prisma.XOR<Prisma.VehicleUpdateWithoutCrewsInput, Prisma.VehicleUncheckedUpdateWithoutCrewsInput>;
};
export type VehicleUpdateWithoutCrewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plate?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutVehiclesNestedInput;
    gpsTracks?: Prisma.GpsTrackUpdateManyWithoutVehicleNestedInput;
};
export type VehicleUncheckedUpdateWithoutCrewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plate?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gpsTracks?: Prisma.GpsTrackUncheckedUpdateManyWithoutVehicleNestedInput;
};
export type VehicleCreateWithoutGpsTracksInput = {
    id?: string;
    plate: string;
    model: string;
    type: string;
    status?: $Enums.VehicleStatus;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutVehiclesInput;
    crews?: Prisma.CrewCreateNestedManyWithoutVehicleInput;
};
export type VehicleUncheckedCreateWithoutGpsTracksInput = {
    id?: string;
    plate: string;
    model: string;
    type: string;
    status?: $Enums.VehicleStatus;
    isActive?: boolean;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    crews?: Prisma.CrewUncheckedCreateNestedManyWithoutVehicleInput;
};
export type VehicleCreateOrConnectWithoutGpsTracksInput = {
    where: Prisma.VehicleWhereUniqueInput;
    create: Prisma.XOR<Prisma.VehicleCreateWithoutGpsTracksInput, Prisma.VehicleUncheckedCreateWithoutGpsTracksInput>;
};
export type VehicleUpsertWithoutGpsTracksInput = {
    update: Prisma.XOR<Prisma.VehicleUpdateWithoutGpsTracksInput, Prisma.VehicleUncheckedUpdateWithoutGpsTracksInput>;
    create: Prisma.XOR<Prisma.VehicleCreateWithoutGpsTracksInput, Prisma.VehicleUncheckedCreateWithoutGpsTracksInput>;
    where?: Prisma.VehicleWhereInput;
};
export type VehicleUpdateToOneWithWhereWithoutGpsTracksInput = {
    where?: Prisma.VehicleWhereInput;
    data: Prisma.XOR<Prisma.VehicleUpdateWithoutGpsTracksInput, Prisma.VehicleUncheckedUpdateWithoutGpsTracksInput>;
};
export type VehicleUpdateWithoutGpsTracksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plate?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutVehiclesNestedInput;
    crews?: Prisma.CrewUpdateManyWithoutVehicleNestedInput;
};
export type VehicleUncheckedUpdateWithoutGpsTracksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plate?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    crews?: Prisma.CrewUncheckedUpdateManyWithoutVehicleNestedInput;
};
export type VehicleCreateManyOrganizationInput = {
    id?: string;
    plate: string;
    model: string;
    type: string;
    status?: $Enums.VehicleStatus;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VehicleUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plate?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    crews?: Prisma.CrewUpdateManyWithoutVehicleNestedInput;
    gpsTracks?: Prisma.GpsTrackUpdateManyWithoutVehicleNestedInput;
};
export type VehicleUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plate?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    crews?: Prisma.CrewUncheckedUpdateManyWithoutVehicleNestedInput;
    gpsTracks?: Prisma.GpsTrackUncheckedUpdateManyWithoutVehicleNestedInput;
};
export type VehicleUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plate?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VehicleCountOutputType = {
    crews: number;
    gpsTracks: number;
};
export type VehicleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    crews?: boolean | VehicleCountOutputTypeCountCrewsArgs;
    gpsTracks?: boolean | VehicleCountOutputTypeCountGpsTracksArgs;
};
export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleCountOutputTypeSelect<ExtArgs> | null;
};
export type VehicleCountOutputTypeCountCrewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CrewWhereInput;
};
export type VehicleCountOutputTypeCountGpsTracksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GpsTrackWhereInput;
};
export type VehicleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    plate?: boolean;
    model?: boolean;
    type?: boolean;
    status?: boolean;
    isActive?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    crews?: boolean | Prisma.Vehicle$crewsArgs<ExtArgs>;
    gpsTracks?: boolean | Prisma.Vehicle$gpsTracksArgs<ExtArgs>;
    _count?: boolean | Prisma.VehicleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vehicle"]>;
export type VehicleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    plate?: boolean;
    model?: boolean;
    type?: boolean;
    status?: boolean;
    isActive?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vehicle"]>;
export type VehicleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    plate?: boolean;
    model?: boolean;
    type?: boolean;
    status?: boolean;
    isActive?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vehicle"]>;
export type VehicleSelectScalar = {
    id?: boolean;
    plate?: boolean;
    model?: boolean;
    type?: boolean;
    status?: boolean;
    isActive?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type VehicleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "plate" | "model" | "type" | "status" | "isActive" | "organizationId" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicle"]>;
export type VehicleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    crews?: boolean | Prisma.Vehicle$crewsArgs<ExtArgs>;
    gpsTracks?: boolean | Prisma.Vehicle$gpsTracksArgs<ExtArgs>;
    _count?: boolean | Prisma.VehicleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VehicleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $VehiclePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Vehicle";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        crews: Prisma.$CrewPayload<ExtArgs>[];
        gpsTracks: Prisma.$GpsTrackPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        plate: string;
        model: string;
        type: string;
        status: $Enums.VehicleStatus;
        isActive: boolean;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["vehicle"]>;
    composites: {};
};
export type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VehiclePayload, S>;
export type VehicleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VehicleCountAggregateInputType | true;
};
export interface VehicleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'];
        meta: {
            name: 'Vehicle';
        };
    };
    findUnique<T extends VehicleFindUniqueArgs>(args: Prisma.SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VehicleFindFirstArgs>(args?: Prisma.SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VehicleFindManyArgs>(args?: Prisma.SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VehicleCreateArgs>(args: Prisma.SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VehicleCreateManyArgs>(args?: Prisma.SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VehicleDeleteArgs>(args: Prisma.SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VehicleUpdateArgs>(args: Prisma.SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VehicleDeleteManyArgs>(args?: Prisma.SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VehicleUpdateManyArgs>(args: Prisma.SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VehicleUpsertArgs>(args: Prisma.SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VehicleCountArgs>(args?: Prisma.Subset<T, VehicleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VehicleCountAggregateOutputType> : number>;
    aggregate<T extends VehicleAggregateArgs>(args: Prisma.Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>;
    groupBy<T extends VehicleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VehicleGroupByArgs['orderBy'];
    } : {
        orderBy?: VehicleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VehicleFieldRefs;
}
export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    crews<T extends Prisma.Vehicle$crewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Vehicle$crewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    gpsTracks<T extends Prisma.Vehicle$gpsTracksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Vehicle$gpsTracksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GpsTrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VehicleFieldRefs {
    readonly id: Prisma.FieldRef<"Vehicle", 'String'>;
    readonly plate: Prisma.FieldRef<"Vehicle", 'String'>;
    readonly model: Prisma.FieldRef<"Vehicle", 'String'>;
    readonly type: Prisma.FieldRef<"Vehicle", 'String'>;
    readonly status: Prisma.FieldRef<"Vehicle", 'VehicleStatus'>;
    readonly isActive: Prisma.FieldRef<"Vehicle", 'Boolean'>;
    readonly organizationId: Prisma.FieldRef<"Vehicle", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Vehicle", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Vehicle", 'DateTime'>;
}
export type VehicleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    where: Prisma.VehicleWhereUniqueInput;
};
export type VehicleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    where: Prisma.VehicleWhereUniqueInput;
};
export type VehicleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    where?: Prisma.VehicleWhereInput;
    orderBy?: Prisma.VehicleOrderByWithRelationInput | Prisma.VehicleOrderByWithRelationInput[];
    cursor?: Prisma.VehicleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VehicleScalarFieldEnum | Prisma.VehicleScalarFieldEnum[];
};
export type VehicleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    where?: Prisma.VehicleWhereInput;
    orderBy?: Prisma.VehicleOrderByWithRelationInput | Prisma.VehicleOrderByWithRelationInput[];
    cursor?: Prisma.VehicleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VehicleScalarFieldEnum | Prisma.VehicleScalarFieldEnum[];
};
export type VehicleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    where?: Prisma.VehicleWhereInput;
    orderBy?: Prisma.VehicleOrderByWithRelationInput | Prisma.VehicleOrderByWithRelationInput[];
    cursor?: Prisma.VehicleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VehicleScalarFieldEnum | Prisma.VehicleScalarFieldEnum[];
};
export type VehicleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VehicleCreateInput, Prisma.VehicleUncheckedCreateInput>;
};
export type VehicleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VehicleCreateManyInput | Prisma.VehicleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VehicleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    data: Prisma.VehicleCreateManyInput | Prisma.VehicleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.VehicleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type VehicleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VehicleUpdateInput, Prisma.VehicleUncheckedUpdateInput>;
    where: Prisma.VehicleWhereUniqueInput;
};
export type VehicleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VehicleUpdateManyMutationInput, Prisma.VehicleUncheckedUpdateManyInput>;
    where?: Prisma.VehicleWhereInput;
    limit?: number;
};
export type VehicleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VehicleUpdateManyMutationInput, Prisma.VehicleUncheckedUpdateManyInput>;
    where?: Prisma.VehicleWhereInput;
    limit?: number;
    include?: Prisma.VehicleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type VehicleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    where: Prisma.VehicleWhereUniqueInput;
    create: Prisma.XOR<Prisma.VehicleCreateInput, Prisma.VehicleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VehicleUpdateInput, Prisma.VehicleUncheckedUpdateInput>;
};
export type VehicleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    where: Prisma.VehicleWhereUniqueInput;
};
export type VehicleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VehicleWhereInput;
    limit?: number;
};
export type Vehicle$crewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewSelect<ExtArgs> | null;
    omit?: Prisma.CrewOmit<ExtArgs> | null;
    include?: Prisma.CrewInclude<ExtArgs> | null;
    where?: Prisma.CrewWhereInput;
    orderBy?: Prisma.CrewOrderByWithRelationInput | Prisma.CrewOrderByWithRelationInput[];
    cursor?: Prisma.CrewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CrewScalarFieldEnum | Prisma.CrewScalarFieldEnum[];
};
export type Vehicle$gpsTracksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GpsTrackSelect<ExtArgs> | null;
    omit?: Prisma.GpsTrackOmit<ExtArgs> | null;
    include?: Prisma.GpsTrackInclude<ExtArgs> | null;
    where?: Prisma.GpsTrackWhereInput;
    orderBy?: Prisma.GpsTrackOrderByWithRelationInput | Prisma.GpsTrackOrderByWithRelationInput[];
    cursor?: Prisma.GpsTrackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GpsTrackScalarFieldEnum | Prisma.GpsTrackScalarFieldEnum[];
};
export type VehicleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
};
