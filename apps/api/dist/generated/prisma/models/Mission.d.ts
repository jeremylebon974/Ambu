import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type MissionModel = runtime.Types.Result.DefaultSelection<Prisma.$MissionPayload>;
export type AggregateMission = {
    _count: MissionCountAggregateOutputType | null;
    _avg: MissionAvgAggregateOutputType | null;
    _sum: MissionSumAggregateOutputType | null;
    _min: MissionMinAggregateOutputType | null;
    _max: MissionMaxAggregateOutputType | null;
};
export type MissionAvgAggregateOutputType = {
    priority: number | null;
};
export type MissionSumAggregateOutputType = {
    priority: number | null;
};
export type MissionMinAggregateOutputType = {
    id: string | null;
    status: $Enums.MissionStatus | null;
    priority: number | null;
    address: string | null;
    notes: string | null;
    scheduledAt: Date | null;
    startedAt: Date | null;
    completedAt: Date | null;
    patientId: string | null;
    crewId: string | null;
    organizationId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MissionMaxAggregateOutputType = {
    id: string | null;
    status: $Enums.MissionStatus | null;
    priority: number | null;
    address: string | null;
    notes: string | null;
    scheduledAt: Date | null;
    startedAt: Date | null;
    completedAt: Date | null;
    patientId: string | null;
    crewId: string | null;
    organizationId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MissionCountAggregateOutputType = {
    id: number;
    status: number;
    priority: number;
    address: number;
    notes: number;
    scheduledAt: number;
    startedAt: number;
    completedAt: number;
    patientId: number;
    crewId: number;
    organizationId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MissionAvgAggregateInputType = {
    priority?: true;
};
export type MissionSumAggregateInputType = {
    priority?: true;
};
export type MissionMinAggregateInputType = {
    id?: true;
    status?: true;
    priority?: true;
    address?: true;
    notes?: true;
    scheduledAt?: true;
    startedAt?: true;
    completedAt?: true;
    patientId?: true;
    crewId?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MissionMaxAggregateInputType = {
    id?: true;
    status?: true;
    priority?: true;
    address?: true;
    notes?: true;
    scheduledAt?: true;
    startedAt?: true;
    completedAt?: true;
    patientId?: true;
    crewId?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MissionCountAggregateInputType = {
    id?: true;
    status?: true;
    priority?: true;
    address?: true;
    notes?: true;
    scheduledAt?: true;
    startedAt?: true;
    completedAt?: true;
    patientId?: true;
    crewId?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MissionWhereInput;
    orderBy?: Prisma.MissionOrderByWithRelationInput | Prisma.MissionOrderByWithRelationInput[];
    cursor?: Prisma.MissionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MissionCountAggregateInputType;
    _avg?: MissionAvgAggregateInputType;
    _sum?: MissionSumAggregateInputType;
    _min?: MissionMinAggregateInputType;
    _max?: MissionMaxAggregateInputType;
};
export type GetMissionAggregateType<T extends MissionAggregateArgs> = {
    [P in keyof T & keyof AggregateMission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMission[P]> : Prisma.GetScalarType<T[P], AggregateMission[P]>;
};
export type MissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MissionWhereInput;
    orderBy?: Prisma.MissionOrderByWithAggregationInput | Prisma.MissionOrderByWithAggregationInput[];
    by: Prisma.MissionScalarFieldEnum[] | Prisma.MissionScalarFieldEnum;
    having?: Prisma.MissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MissionCountAggregateInputType | true;
    _avg?: MissionAvgAggregateInputType;
    _sum?: MissionSumAggregateInputType;
    _min?: MissionMinAggregateInputType;
    _max?: MissionMaxAggregateInputType;
};
export type MissionGroupByOutputType = {
    id: string;
    status: $Enums.MissionStatus;
    priority: number;
    address: string | null;
    notes: string | null;
    scheduledAt: Date | null;
    startedAt: Date | null;
    completedAt: Date | null;
    patientId: string | null;
    crewId: string | null;
    organizationId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MissionCountAggregateOutputType | null;
    _avg: MissionAvgAggregateOutputType | null;
    _sum: MissionSumAggregateOutputType | null;
    _min: MissionMinAggregateOutputType | null;
    _max: MissionMaxAggregateOutputType | null;
};
export type GetMissionGroupByPayload<T extends MissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MissionGroupByOutputType[P]>;
}>>;
export type MissionWhereInput = {
    AND?: Prisma.MissionWhereInput | Prisma.MissionWhereInput[];
    OR?: Prisma.MissionWhereInput[];
    NOT?: Prisma.MissionWhereInput | Prisma.MissionWhereInput[];
    id?: Prisma.StringFilter<"Mission"> | string;
    status?: Prisma.EnumMissionStatusFilter<"Mission"> | $Enums.MissionStatus;
    priority?: Prisma.IntFilter<"Mission"> | number;
    address?: Prisma.StringNullableFilter<"Mission"> | string | null;
    notes?: Prisma.StringNullableFilter<"Mission"> | string | null;
    scheduledAt?: Prisma.DateTimeNullableFilter<"Mission"> | Date | string | null;
    startedAt?: Prisma.DateTimeNullableFilter<"Mission"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"Mission"> | Date | string | null;
    patientId?: Prisma.StringNullableFilter<"Mission"> | string | null;
    crewId?: Prisma.StringNullableFilter<"Mission"> | string | null;
    organizationId?: Prisma.StringFilter<"Mission"> | string;
    createdAt?: Prisma.DateTimeFilter<"Mission"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Mission"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    patient?: Prisma.XOR<Prisma.PatientNullableScalarRelationFilter, Prisma.PatientWhereInput> | null;
    crew?: Prisma.XOR<Prisma.CrewNullableScalarRelationFilter, Prisma.CrewWhereInput> | null;
    events?: Prisma.MissionEventListRelationFilter;
    documents?: Prisma.DocumentListRelationFilter;
    invoices?: Prisma.InvoiceListRelationFilter;
};
export type MissionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    scheduledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    startedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    patientId?: Prisma.SortOrderInput | Prisma.SortOrder;
    crewId?: Prisma.SortOrderInput | Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    patient?: Prisma.PatientOrderByWithRelationInput;
    crew?: Prisma.CrewOrderByWithRelationInput;
    events?: Prisma.MissionEventOrderByRelationAggregateInput;
    documents?: Prisma.DocumentOrderByRelationAggregateInput;
    invoices?: Prisma.InvoiceOrderByRelationAggregateInput;
};
export type MissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MissionWhereInput | Prisma.MissionWhereInput[];
    OR?: Prisma.MissionWhereInput[];
    NOT?: Prisma.MissionWhereInput | Prisma.MissionWhereInput[];
    status?: Prisma.EnumMissionStatusFilter<"Mission"> | $Enums.MissionStatus;
    priority?: Prisma.IntFilter<"Mission"> | number;
    address?: Prisma.StringNullableFilter<"Mission"> | string | null;
    notes?: Prisma.StringNullableFilter<"Mission"> | string | null;
    scheduledAt?: Prisma.DateTimeNullableFilter<"Mission"> | Date | string | null;
    startedAt?: Prisma.DateTimeNullableFilter<"Mission"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"Mission"> | Date | string | null;
    patientId?: Prisma.StringNullableFilter<"Mission"> | string | null;
    crewId?: Prisma.StringNullableFilter<"Mission"> | string | null;
    organizationId?: Prisma.StringFilter<"Mission"> | string;
    createdAt?: Prisma.DateTimeFilter<"Mission"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Mission"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    patient?: Prisma.XOR<Prisma.PatientNullableScalarRelationFilter, Prisma.PatientWhereInput> | null;
    crew?: Prisma.XOR<Prisma.CrewNullableScalarRelationFilter, Prisma.CrewWhereInput> | null;
    events?: Prisma.MissionEventListRelationFilter;
    documents?: Prisma.DocumentListRelationFilter;
    invoices?: Prisma.InvoiceListRelationFilter;
}, "id">;
export type MissionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    scheduledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    startedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    patientId?: Prisma.SortOrderInput | Prisma.SortOrder;
    crewId?: Prisma.SortOrderInput | Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MissionCountOrderByAggregateInput;
    _avg?: Prisma.MissionAvgOrderByAggregateInput;
    _max?: Prisma.MissionMaxOrderByAggregateInput;
    _min?: Prisma.MissionMinOrderByAggregateInput;
    _sum?: Prisma.MissionSumOrderByAggregateInput;
};
export type MissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.MissionScalarWhereWithAggregatesInput | Prisma.MissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.MissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MissionScalarWhereWithAggregatesInput | Prisma.MissionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Mission"> | string;
    status?: Prisma.EnumMissionStatusWithAggregatesFilter<"Mission"> | $Enums.MissionStatus;
    priority?: Prisma.IntWithAggregatesFilter<"Mission"> | number;
    address?: Prisma.StringNullableWithAggregatesFilter<"Mission"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Mission"> | string | null;
    scheduledAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Mission"> | Date | string | null;
    startedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Mission"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Mission"> | Date | string | null;
    patientId?: Prisma.StringNullableWithAggregatesFilter<"Mission"> | string | null;
    crewId?: Prisma.StringNullableWithAggregatesFilter<"Mission"> | string | null;
    organizationId?: Prisma.StringWithAggregatesFilter<"Mission"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Mission"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Mission"> | Date | string;
};
export type MissionCreateInput = {
    id?: string;
    status?: $Enums.MissionStatus;
    priority?: number;
    address?: string | null;
    notes?: string | null;
    scheduledAt?: Date | string | null;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutMissionsInput;
    patient?: Prisma.PatientCreateNestedOneWithoutMissionsInput;
    crew?: Prisma.CrewCreateNestedOneWithoutMissionsInput;
    events?: Prisma.MissionEventCreateNestedManyWithoutMissionInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutMissionInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutMissionInput;
};
export type MissionUncheckedCreateInput = {
    id?: string;
    status?: $Enums.MissionStatus;
    priority?: number;
    address?: string | null;
    notes?: string | null;
    scheduledAt?: Date | string | null;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    patientId?: string | null;
    crewId?: string | null;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.MissionEventUncheckedCreateNestedManyWithoutMissionInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutMissionInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutMissionInput;
};
export type MissionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutMissionsNestedInput;
    patient?: Prisma.PatientUpdateOneWithoutMissionsNestedInput;
    crew?: Prisma.CrewUpdateOneWithoutMissionsNestedInput;
    events?: Prisma.MissionEventUpdateManyWithoutMissionNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutMissionNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutMissionNestedInput;
};
export type MissionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    crewId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.MissionEventUncheckedUpdateManyWithoutMissionNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutMissionNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutMissionNestedInput;
};
export type MissionCreateManyInput = {
    id?: string;
    status?: $Enums.MissionStatus;
    priority?: number;
    address?: string | null;
    notes?: string | null;
    scheduledAt?: Date | string | null;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    patientId?: string | null;
    crewId?: string | null;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MissionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    crewId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionListRelationFilter = {
    every?: Prisma.MissionWhereInput;
    some?: Prisma.MissionWhereInput;
    none?: Prisma.MissionWhereInput;
};
export type MissionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MissionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    scheduledAt?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    crewId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MissionAvgOrderByAggregateInput = {
    priority?: Prisma.SortOrder;
};
export type MissionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    scheduledAt?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    crewId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MissionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    scheduledAt?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    crewId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MissionSumOrderByAggregateInput = {
    priority?: Prisma.SortOrder;
};
export type MissionScalarRelationFilter = {
    is?: Prisma.MissionWhereInput;
    isNot?: Prisma.MissionWhereInput;
};
export type MissionNullableScalarRelationFilter = {
    is?: Prisma.MissionWhereInput | null;
    isNot?: Prisma.MissionWhereInput | null;
};
export type MissionCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.MissionCreateWithoutOrganizationInput, Prisma.MissionUncheckedCreateWithoutOrganizationInput> | Prisma.MissionCreateWithoutOrganizationInput[] | Prisma.MissionUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.MissionCreateOrConnectWithoutOrganizationInput | Prisma.MissionCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.MissionCreateManyOrganizationInputEnvelope;
    connect?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
};
export type MissionUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.MissionCreateWithoutOrganizationInput, Prisma.MissionUncheckedCreateWithoutOrganizationInput> | Prisma.MissionCreateWithoutOrganizationInput[] | Prisma.MissionUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.MissionCreateOrConnectWithoutOrganizationInput | Prisma.MissionCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.MissionCreateManyOrganizationInputEnvelope;
    connect?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
};
export type MissionUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.MissionCreateWithoutOrganizationInput, Prisma.MissionUncheckedCreateWithoutOrganizationInput> | Prisma.MissionCreateWithoutOrganizationInput[] | Prisma.MissionUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.MissionCreateOrConnectWithoutOrganizationInput | Prisma.MissionCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.MissionUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.MissionUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.MissionCreateManyOrganizationInputEnvelope;
    set?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    disconnect?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    delete?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    connect?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    update?: Prisma.MissionUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.MissionUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.MissionUpdateManyWithWhereWithoutOrganizationInput | Prisma.MissionUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.MissionScalarWhereInput | Prisma.MissionScalarWhereInput[];
};
export type MissionUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.MissionCreateWithoutOrganizationInput, Prisma.MissionUncheckedCreateWithoutOrganizationInput> | Prisma.MissionCreateWithoutOrganizationInput[] | Prisma.MissionUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.MissionCreateOrConnectWithoutOrganizationInput | Prisma.MissionCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.MissionUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.MissionUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.MissionCreateManyOrganizationInputEnvelope;
    set?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    disconnect?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    delete?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    connect?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    update?: Prisma.MissionUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.MissionUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.MissionUpdateManyWithWhereWithoutOrganizationInput | Prisma.MissionUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.MissionScalarWhereInput | Prisma.MissionScalarWhereInput[];
};
export type MissionCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.MissionCreateWithoutPatientInput, Prisma.MissionUncheckedCreateWithoutPatientInput> | Prisma.MissionCreateWithoutPatientInput[] | Prisma.MissionUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.MissionCreateOrConnectWithoutPatientInput | Prisma.MissionCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.MissionCreateManyPatientInputEnvelope;
    connect?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
};
export type MissionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.MissionCreateWithoutPatientInput, Prisma.MissionUncheckedCreateWithoutPatientInput> | Prisma.MissionCreateWithoutPatientInput[] | Prisma.MissionUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.MissionCreateOrConnectWithoutPatientInput | Prisma.MissionCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.MissionCreateManyPatientInputEnvelope;
    connect?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
};
export type MissionUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.MissionCreateWithoutPatientInput, Prisma.MissionUncheckedCreateWithoutPatientInput> | Prisma.MissionCreateWithoutPatientInput[] | Prisma.MissionUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.MissionCreateOrConnectWithoutPatientInput | Prisma.MissionCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.MissionUpsertWithWhereUniqueWithoutPatientInput | Prisma.MissionUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.MissionCreateManyPatientInputEnvelope;
    set?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    disconnect?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    delete?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    connect?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    update?: Prisma.MissionUpdateWithWhereUniqueWithoutPatientInput | Prisma.MissionUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.MissionUpdateManyWithWhereWithoutPatientInput | Prisma.MissionUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.MissionScalarWhereInput | Prisma.MissionScalarWhereInput[];
};
export type MissionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.MissionCreateWithoutPatientInput, Prisma.MissionUncheckedCreateWithoutPatientInput> | Prisma.MissionCreateWithoutPatientInput[] | Prisma.MissionUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.MissionCreateOrConnectWithoutPatientInput | Prisma.MissionCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.MissionUpsertWithWhereUniqueWithoutPatientInput | Prisma.MissionUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.MissionCreateManyPatientInputEnvelope;
    set?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    disconnect?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    delete?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    connect?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    update?: Prisma.MissionUpdateWithWhereUniqueWithoutPatientInput | Prisma.MissionUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.MissionUpdateManyWithWhereWithoutPatientInput | Prisma.MissionUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.MissionScalarWhereInput | Prisma.MissionScalarWhereInput[];
};
export type MissionCreateNestedManyWithoutCrewInput = {
    create?: Prisma.XOR<Prisma.MissionCreateWithoutCrewInput, Prisma.MissionUncheckedCreateWithoutCrewInput> | Prisma.MissionCreateWithoutCrewInput[] | Prisma.MissionUncheckedCreateWithoutCrewInput[];
    connectOrCreate?: Prisma.MissionCreateOrConnectWithoutCrewInput | Prisma.MissionCreateOrConnectWithoutCrewInput[];
    createMany?: Prisma.MissionCreateManyCrewInputEnvelope;
    connect?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
};
export type MissionUncheckedCreateNestedManyWithoutCrewInput = {
    create?: Prisma.XOR<Prisma.MissionCreateWithoutCrewInput, Prisma.MissionUncheckedCreateWithoutCrewInput> | Prisma.MissionCreateWithoutCrewInput[] | Prisma.MissionUncheckedCreateWithoutCrewInput[];
    connectOrCreate?: Prisma.MissionCreateOrConnectWithoutCrewInput | Prisma.MissionCreateOrConnectWithoutCrewInput[];
    createMany?: Prisma.MissionCreateManyCrewInputEnvelope;
    connect?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
};
export type MissionUpdateManyWithoutCrewNestedInput = {
    create?: Prisma.XOR<Prisma.MissionCreateWithoutCrewInput, Prisma.MissionUncheckedCreateWithoutCrewInput> | Prisma.MissionCreateWithoutCrewInput[] | Prisma.MissionUncheckedCreateWithoutCrewInput[];
    connectOrCreate?: Prisma.MissionCreateOrConnectWithoutCrewInput | Prisma.MissionCreateOrConnectWithoutCrewInput[];
    upsert?: Prisma.MissionUpsertWithWhereUniqueWithoutCrewInput | Prisma.MissionUpsertWithWhereUniqueWithoutCrewInput[];
    createMany?: Prisma.MissionCreateManyCrewInputEnvelope;
    set?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    disconnect?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    delete?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    connect?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    update?: Prisma.MissionUpdateWithWhereUniqueWithoutCrewInput | Prisma.MissionUpdateWithWhereUniqueWithoutCrewInput[];
    updateMany?: Prisma.MissionUpdateManyWithWhereWithoutCrewInput | Prisma.MissionUpdateManyWithWhereWithoutCrewInput[];
    deleteMany?: Prisma.MissionScalarWhereInput | Prisma.MissionScalarWhereInput[];
};
export type MissionUncheckedUpdateManyWithoutCrewNestedInput = {
    create?: Prisma.XOR<Prisma.MissionCreateWithoutCrewInput, Prisma.MissionUncheckedCreateWithoutCrewInput> | Prisma.MissionCreateWithoutCrewInput[] | Prisma.MissionUncheckedCreateWithoutCrewInput[];
    connectOrCreate?: Prisma.MissionCreateOrConnectWithoutCrewInput | Prisma.MissionCreateOrConnectWithoutCrewInput[];
    upsert?: Prisma.MissionUpsertWithWhereUniqueWithoutCrewInput | Prisma.MissionUpsertWithWhereUniqueWithoutCrewInput[];
    createMany?: Prisma.MissionCreateManyCrewInputEnvelope;
    set?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    disconnect?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    delete?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    connect?: Prisma.MissionWhereUniqueInput | Prisma.MissionWhereUniqueInput[];
    update?: Prisma.MissionUpdateWithWhereUniqueWithoutCrewInput | Prisma.MissionUpdateWithWhereUniqueWithoutCrewInput[];
    updateMany?: Prisma.MissionUpdateManyWithWhereWithoutCrewInput | Prisma.MissionUpdateManyWithWhereWithoutCrewInput[];
    deleteMany?: Prisma.MissionScalarWhereInput | Prisma.MissionScalarWhereInput[];
};
export type EnumMissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.MissionStatus;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type MissionCreateNestedOneWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.MissionCreateWithoutEventsInput, Prisma.MissionUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.MissionCreateOrConnectWithoutEventsInput;
    connect?: Prisma.MissionWhereUniqueInput;
};
export type MissionUpdateOneRequiredWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.MissionCreateWithoutEventsInput, Prisma.MissionUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.MissionCreateOrConnectWithoutEventsInput;
    upsert?: Prisma.MissionUpsertWithoutEventsInput;
    connect?: Prisma.MissionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MissionUpdateToOneWithWhereWithoutEventsInput, Prisma.MissionUpdateWithoutEventsInput>, Prisma.MissionUncheckedUpdateWithoutEventsInput>;
};
export type MissionCreateNestedOneWithoutDocumentsInput = {
    create?: Prisma.XOR<Prisma.MissionCreateWithoutDocumentsInput, Prisma.MissionUncheckedCreateWithoutDocumentsInput>;
    connectOrCreate?: Prisma.MissionCreateOrConnectWithoutDocumentsInput;
    connect?: Prisma.MissionWhereUniqueInput;
};
export type MissionUpdateOneWithoutDocumentsNestedInput = {
    create?: Prisma.XOR<Prisma.MissionCreateWithoutDocumentsInput, Prisma.MissionUncheckedCreateWithoutDocumentsInput>;
    connectOrCreate?: Prisma.MissionCreateOrConnectWithoutDocumentsInput;
    upsert?: Prisma.MissionUpsertWithoutDocumentsInput;
    disconnect?: Prisma.MissionWhereInput | boolean;
    delete?: Prisma.MissionWhereInput | boolean;
    connect?: Prisma.MissionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MissionUpdateToOneWithWhereWithoutDocumentsInput, Prisma.MissionUpdateWithoutDocumentsInput>, Prisma.MissionUncheckedUpdateWithoutDocumentsInput>;
};
export type MissionCreateNestedOneWithoutInvoicesInput = {
    create?: Prisma.XOR<Prisma.MissionCreateWithoutInvoicesInput, Prisma.MissionUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.MissionCreateOrConnectWithoutInvoicesInput;
    connect?: Prisma.MissionWhereUniqueInput;
};
export type MissionUpdateOneWithoutInvoicesNestedInput = {
    create?: Prisma.XOR<Prisma.MissionCreateWithoutInvoicesInput, Prisma.MissionUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.MissionCreateOrConnectWithoutInvoicesInput;
    upsert?: Prisma.MissionUpsertWithoutInvoicesInput;
    disconnect?: Prisma.MissionWhereInput | boolean;
    delete?: Prisma.MissionWhereInput | boolean;
    connect?: Prisma.MissionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MissionUpdateToOneWithWhereWithoutInvoicesInput, Prisma.MissionUpdateWithoutInvoicesInput>, Prisma.MissionUncheckedUpdateWithoutInvoicesInput>;
};
export type MissionCreateWithoutOrganizationInput = {
    id?: string;
    status?: $Enums.MissionStatus;
    priority?: number;
    address?: string | null;
    notes?: string | null;
    scheduledAt?: Date | string | null;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patient?: Prisma.PatientCreateNestedOneWithoutMissionsInput;
    crew?: Prisma.CrewCreateNestedOneWithoutMissionsInput;
    events?: Prisma.MissionEventCreateNestedManyWithoutMissionInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutMissionInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutMissionInput;
};
export type MissionUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    status?: $Enums.MissionStatus;
    priority?: number;
    address?: string | null;
    notes?: string | null;
    scheduledAt?: Date | string | null;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    patientId?: string | null;
    crewId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.MissionEventUncheckedCreateNestedManyWithoutMissionInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutMissionInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutMissionInput;
};
export type MissionCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.MissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.MissionCreateWithoutOrganizationInput, Prisma.MissionUncheckedCreateWithoutOrganizationInput>;
};
export type MissionCreateManyOrganizationInputEnvelope = {
    data: Prisma.MissionCreateManyOrganizationInput | Prisma.MissionCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type MissionUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.MissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.MissionUpdateWithoutOrganizationInput, Prisma.MissionUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.MissionCreateWithoutOrganizationInput, Prisma.MissionUncheckedCreateWithoutOrganizationInput>;
};
export type MissionUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.MissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.MissionUpdateWithoutOrganizationInput, Prisma.MissionUncheckedUpdateWithoutOrganizationInput>;
};
export type MissionUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.MissionScalarWhereInput;
    data: Prisma.XOR<Prisma.MissionUpdateManyMutationInput, Prisma.MissionUncheckedUpdateManyWithoutOrganizationInput>;
};
export type MissionScalarWhereInput = {
    AND?: Prisma.MissionScalarWhereInput | Prisma.MissionScalarWhereInput[];
    OR?: Prisma.MissionScalarWhereInput[];
    NOT?: Prisma.MissionScalarWhereInput | Prisma.MissionScalarWhereInput[];
    id?: Prisma.StringFilter<"Mission"> | string;
    status?: Prisma.EnumMissionStatusFilter<"Mission"> | $Enums.MissionStatus;
    priority?: Prisma.IntFilter<"Mission"> | number;
    address?: Prisma.StringNullableFilter<"Mission"> | string | null;
    notes?: Prisma.StringNullableFilter<"Mission"> | string | null;
    scheduledAt?: Prisma.DateTimeNullableFilter<"Mission"> | Date | string | null;
    startedAt?: Prisma.DateTimeNullableFilter<"Mission"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"Mission"> | Date | string | null;
    patientId?: Prisma.StringNullableFilter<"Mission"> | string | null;
    crewId?: Prisma.StringNullableFilter<"Mission"> | string | null;
    organizationId?: Prisma.StringFilter<"Mission"> | string;
    createdAt?: Prisma.DateTimeFilter<"Mission"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Mission"> | Date | string;
};
export type MissionCreateWithoutPatientInput = {
    id?: string;
    status?: $Enums.MissionStatus;
    priority?: number;
    address?: string | null;
    notes?: string | null;
    scheduledAt?: Date | string | null;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutMissionsInput;
    crew?: Prisma.CrewCreateNestedOneWithoutMissionsInput;
    events?: Prisma.MissionEventCreateNestedManyWithoutMissionInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutMissionInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutMissionInput;
};
export type MissionUncheckedCreateWithoutPatientInput = {
    id?: string;
    status?: $Enums.MissionStatus;
    priority?: number;
    address?: string | null;
    notes?: string | null;
    scheduledAt?: Date | string | null;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    crewId?: string | null;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.MissionEventUncheckedCreateNestedManyWithoutMissionInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutMissionInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutMissionInput;
};
export type MissionCreateOrConnectWithoutPatientInput = {
    where: Prisma.MissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.MissionCreateWithoutPatientInput, Prisma.MissionUncheckedCreateWithoutPatientInput>;
};
export type MissionCreateManyPatientInputEnvelope = {
    data: Prisma.MissionCreateManyPatientInput | Prisma.MissionCreateManyPatientInput[];
    skipDuplicates?: boolean;
};
export type MissionUpsertWithWhereUniqueWithoutPatientInput = {
    where: Prisma.MissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.MissionUpdateWithoutPatientInput, Prisma.MissionUncheckedUpdateWithoutPatientInput>;
    create: Prisma.XOR<Prisma.MissionCreateWithoutPatientInput, Prisma.MissionUncheckedCreateWithoutPatientInput>;
};
export type MissionUpdateWithWhereUniqueWithoutPatientInput = {
    where: Prisma.MissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.MissionUpdateWithoutPatientInput, Prisma.MissionUncheckedUpdateWithoutPatientInput>;
};
export type MissionUpdateManyWithWhereWithoutPatientInput = {
    where: Prisma.MissionScalarWhereInput;
    data: Prisma.XOR<Prisma.MissionUpdateManyMutationInput, Prisma.MissionUncheckedUpdateManyWithoutPatientInput>;
};
export type MissionCreateWithoutCrewInput = {
    id?: string;
    status?: $Enums.MissionStatus;
    priority?: number;
    address?: string | null;
    notes?: string | null;
    scheduledAt?: Date | string | null;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutMissionsInput;
    patient?: Prisma.PatientCreateNestedOneWithoutMissionsInput;
    events?: Prisma.MissionEventCreateNestedManyWithoutMissionInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutMissionInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutMissionInput;
};
export type MissionUncheckedCreateWithoutCrewInput = {
    id?: string;
    status?: $Enums.MissionStatus;
    priority?: number;
    address?: string | null;
    notes?: string | null;
    scheduledAt?: Date | string | null;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    patientId?: string | null;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.MissionEventUncheckedCreateNestedManyWithoutMissionInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutMissionInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutMissionInput;
};
export type MissionCreateOrConnectWithoutCrewInput = {
    where: Prisma.MissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.MissionCreateWithoutCrewInput, Prisma.MissionUncheckedCreateWithoutCrewInput>;
};
export type MissionCreateManyCrewInputEnvelope = {
    data: Prisma.MissionCreateManyCrewInput | Prisma.MissionCreateManyCrewInput[];
    skipDuplicates?: boolean;
};
export type MissionUpsertWithWhereUniqueWithoutCrewInput = {
    where: Prisma.MissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.MissionUpdateWithoutCrewInput, Prisma.MissionUncheckedUpdateWithoutCrewInput>;
    create: Prisma.XOR<Prisma.MissionCreateWithoutCrewInput, Prisma.MissionUncheckedCreateWithoutCrewInput>;
};
export type MissionUpdateWithWhereUniqueWithoutCrewInput = {
    where: Prisma.MissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.MissionUpdateWithoutCrewInput, Prisma.MissionUncheckedUpdateWithoutCrewInput>;
};
export type MissionUpdateManyWithWhereWithoutCrewInput = {
    where: Prisma.MissionScalarWhereInput;
    data: Prisma.XOR<Prisma.MissionUpdateManyMutationInput, Prisma.MissionUncheckedUpdateManyWithoutCrewInput>;
};
export type MissionCreateWithoutEventsInput = {
    id?: string;
    status?: $Enums.MissionStatus;
    priority?: number;
    address?: string | null;
    notes?: string | null;
    scheduledAt?: Date | string | null;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutMissionsInput;
    patient?: Prisma.PatientCreateNestedOneWithoutMissionsInput;
    crew?: Prisma.CrewCreateNestedOneWithoutMissionsInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutMissionInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutMissionInput;
};
export type MissionUncheckedCreateWithoutEventsInput = {
    id?: string;
    status?: $Enums.MissionStatus;
    priority?: number;
    address?: string | null;
    notes?: string | null;
    scheduledAt?: Date | string | null;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    patientId?: string | null;
    crewId?: string | null;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutMissionInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutMissionInput;
};
export type MissionCreateOrConnectWithoutEventsInput = {
    where: Prisma.MissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.MissionCreateWithoutEventsInput, Prisma.MissionUncheckedCreateWithoutEventsInput>;
};
export type MissionUpsertWithoutEventsInput = {
    update: Prisma.XOR<Prisma.MissionUpdateWithoutEventsInput, Prisma.MissionUncheckedUpdateWithoutEventsInput>;
    create: Prisma.XOR<Prisma.MissionCreateWithoutEventsInput, Prisma.MissionUncheckedCreateWithoutEventsInput>;
    where?: Prisma.MissionWhereInput;
};
export type MissionUpdateToOneWithWhereWithoutEventsInput = {
    where?: Prisma.MissionWhereInput;
    data: Prisma.XOR<Prisma.MissionUpdateWithoutEventsInput, Prisma.MissionUncheckedUpdateWithoutEventsInput>;
};
export type MissionUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutMissionsNestedInput;
    patient?: Prisma.PatientUpdateOneWithoutMissionsNestedInput;
    crew?: Prisma.CrewUpdateOneWithoutMissionsNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutMissionNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutMissionNestedInput;
};
export type MissionUncheckedUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    crewId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutMissionNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutMissionNestedInput;
};
export type MissionCreateWithoutDocumentsInput = {
    id?: string;
    status?: $Enums.MissionStatus;
    priority?: number;
    address?: string | null;
    notes?: string | null;
    scheduledAt?: Date | string | null;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutMissionsInput;
    patient?: Prisma.PatientCreateNestedOneWithoutMissionsInput;
    crew?: Prisma.CrewCreateNestedOneWithoutMissionsInput;
    events?: Prisma.MissionEventCreateNestedManyWithoutMissionInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutMissionInput;
};
export type MissionUncheckedCreateWithoutDocumentsInput = {
    id?: string;
    status?: $Enums.MissionStatus;
    priority?: number;
    address?: string | null;
    notes?: string | null;
    scheduledAt?: Date | string | null;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    patientId?: string | null;
    crewId?: string | null;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.MissionEventUncheckedCreateNestedManyWithoutMissionInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutMissionInput;
};
export type MissionCreateOrConnectWithoutDocumentsInput = {
    where: Prisma.MissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.MissionCreateWithoutDocumentsInput, Prisma.MissionUncheckedCreateWithoutDocumentsInput>;
};
export type MissionUpsertWithoutDocumentsInput = {
    update: Prisma.XOR<Prisma.MissionUpdateWithoutDocumentsInput, Prisma.MissionUncheckedUpdateWithoutDocumentsInput>;
    create: Prisma.XOR<Prisma.MissionCreateWithoutDocumentsInput, Prisma.MissionUncheckedCreateWithoutDocumentsInput>;
    where?: Prisma.MissionWhereInput;
};
export type MissionUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: Prisma.MissionWhereInput;
    data: Prisma.XOR<Prisma.MissionUpdateWithoutDocumentsInput, Prisma.MissionUncheckedUpdateWithoutDocumentsInput>;
};
export type MissionUpdateWithoutDocumentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutMissionsNestedInput;
    patient?: Prisma.PatientUpdateOneWithoutMissionsNestedInput;
    crew?: Prisma.CrewUpdateOneWithoutMissionsNestedInput;
    events?: Prisma.MissionEventUpdateManyWithoutMissionNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutMissionNestedInput;
};
export type MissionUncheckedUpdateWithoutDocumentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    crewId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.MissionEventUncheckedUpdateManyWithoutMissionNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutMissionNestedInput;
};
export type MissionCreateWithoutInvoicesInput = {
    id?: string;
    status?: $Enums.MissionStatus;
    priority?: number;
    address?: string | null;
    notes?: string | null;
    scheduledAt?: Date | string | null;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutMissionsInput;
    patient?: Prisma.PatientCreateNestedOneWithoutMissionsInput;
    crew?: Prisma.CrewCreateNestedOneWithoutMissionsInput;
    events?: Prisma.MissionEventCreateNestedManyWithoutMissionInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutMissionInput;
};
export type MissionUncheckedCreateWithoutInvoicesInput = {
    id?: string;
    status?: $Enums.MissionStatus;
    priority?: number;
    address?: string | null;
    notes?: string | null;
    scheduledAt?: Date | string | null;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    patientId?: string | null;
    crewId?: string | null;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: Prisma.MissionEventUncheckedCreateNestedManyWithoutMissionInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutMissionInput;
};
export type MissionCreateOrConnectWithoutInvoicesInput = {
    where: Prisma.MissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.MissionCreateWithoutInvoicesInput, Prisma.MissionUncheckedCreateWithoutInvoicesInput>;
};
export type MissionUpsertWithoutInvoicesInput = {
    update: Prisma.XOR<Prisma.MissionUpdateWithoutInvoicesInput, Prisma.MissionUncheckedUpdateWithoutInvoicesInput>;
    create: Prisma.XOR<Prisma.MissionCreateWithoutInvoicesInput, Prisma.MissionUncheckedCreateWithoutInvoicesInput>;
    where?: Prisma.MissionWhereInput;
};
export type MissionUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: Prisma.MissionWhereInput;
    data: Prisma.XOR<Prisma.MissionUpdateWithoutInvoicesInput, Prisma.MissionUncheckedUpdateWithoutInvoicesInput>;
};
export type MissionUpdateWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutMissionsNestedInput;
    patient?: Prisma.PatientUpdateOneWithoutMissionsNestedInput;
    crew?: Prisma.CrewUpdateOneWithoutMissionsNestedInput;
    events?: Prisma.MissionEventUpdateManyWithoutMissionNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutMissionNestedInput;
};
export type MissionUncheckedUpdateWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    crewId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.MissionEventUncheckedUpdateManyWithoutMissionNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutMissionNestedInput;
};
export type MissionCreateManyOrganizationInput = {
    id?: string;
    status?: $Enums.MissionStatus;
    priority?: number;
    address?: string | null;
    notes?: string | null;
    scheduledAt?: Date | string | null;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    patientId?: string | null;
    crewId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MissionUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.PatientUpdateOneWithoutMissionsNestedInput;
    crew?: Prisma.CrewUpdateOneWithoutMissionsNestedInput;
    events?: Prisma.MissionEventUpdateManyWithoutMissionNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutMissionNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutMissionNestedInput;
};
export type MissionUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    crewId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.MissionEventUncheckedUpdateManyWithoutMissionNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutMissionNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutMissionNestedInput;
};
export type MissionUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    crewId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionCreateManyPatientInput = {
    id?: string;
    status?: $Enums.MissionStatus;
    priority?: number;
    address?: string | null;
    notes?: string | null;
    scheduledAt?: Date | string | null;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    crewId?: string | null;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MissionUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutMissionsNestedInput;
    crew?: Prisma.CrewUpdateOneWithoutMissionsNestedInput;
    events?: Prisma.MissionEventUpdateManyWithoutMissionNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutMissionNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutMissionNestedInput;
};
export type MissionUncheckedUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    crewId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.MissionEventUncheckedUpdateManyWithoutMissionNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutMissionNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutMissionNestedInput;
};
export type MissionUncheckedUpdateManyWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    crewId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionCreateManyCrewInput = {
    id?: string;
    status?: $Enums.MissionStatus;
    priority?: number;
    address?: string | null;
    notes?: string | null;
    scheduledAt?: Date | string | null;
    startedAt?: Date | string | null;
    completedAt?: Date | string | null;
    patientId?: string | null;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MissionUpdateWithoutCrewInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutMissionsNestedInput;
    patient?: Prisma.PatientUpdateOneWithoutMissionsNestedInput;
    events?: Prisma.MissionEventUpdateManyWithoutMissionNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutMissionNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutMissionNestedInput;
};
export type MissionUncheckedUpdateWithoutCrewInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.MissionEventUncheckedUpdateManyWithoutMissionNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutMissionNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutMissionNestedInput;
};
export type MissionUncheckedUpdateManyWithoutCrewInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMissionStatusFieldUpdateOperationsInput | $Enums.MissionStatus;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    startedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionCountOutputType = {
    events: number;
    documents: number;
    invoices: number;
};
export type MissionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    events?: boolean | MissionCountOutputTypeCountEventsArgs;
    documents?: boolean | MissionCountOutputTypeCountDocumentsArgs;
    invoices?: boolean | MissionCountOutputTypeCountInvoicesArgs;
};
export type MissionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionCountOutputTypeSelect<ExtArgs> | null;
};
export type MissionCountOutputTypeCountEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MissionEventWhereInput;
};
export type MissionCountOutputTypeCountDocumentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
};
export type MissionCountOutputTypeCountInvoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
};
export type MissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    priority?: boolean;
    address?: boolean;
    notes?: boolean;
    scheduledAt?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    patientId?: boolean;
    crewId?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    patient?: boolean | Prisma.Mission$patientArgs<ExtArgs>;
    crew?: boolean | Prisma.Mission$crewArgs<ExtArgs>;
    events?: boolean | Prisma.Mission$eventsArgs<ExtArgs>;
    documents?: boolean | Prisma.Mission$documentsArgs<ExtArgs>;
    invoices?: boolean | Prisma.Mission$invoicesArgs<ExtArgs>;
    _count?: boolean | Prisma.MissionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mission"]>;
export type MissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    priority?: boolean;
    address?: boolean;
    notes?: boolean;
    scheduledAt?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    patientId?: boolean;
    crewId?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    patient?: boolean | Prisma.Mission$patientArgs<ExtArgs>;
    crew?: boolean | Prisma.Mission$crewArgs<ExtArgs>;
}, ExtArgs["result"]["mission"]>;
export type MissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    priority?: boolean;
    address?: boolean;
    notes?: boolean;
    scheduledAt?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    patientId?: boolean;
    crewId?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    patient?: boolean | Prisma.Mission$patientArgs<ExtArgs>;
    crew?: boolean | Prisma.Mission$crewArgs<ExtArgs>;
}, ExtArgs["result"]["mission"]>;
export type MissionSelectScalar = {
    id?: boolean;
    status?: boolean;
    priority?: boolean;
    address?: boolean;
    notes?: boolean;
    scheduledAt?: boolean;
    startedAt?: boolean;
    completedAt?: boolean;
    patientId?: boolean;
    crewId?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "status" | "priority" | "address" | "notes" | "scheduledAt" | "startedAt" | "completedAt" | "patientId" | "crewId" | "organizationId" | "createdAt" | "updatedAt", ExtArgs["result"]["mission"]>;
export type MissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    patient?: boolean | Prisma.Mission$patientArgs<ExtArgs>;
    crew?: boolean | Prisma.Mission$crewArgs<ExtArgs>;
    events?: boolean | Prisma.Mission$eventsArgs<ExtArgs>;
    documents?: boolean | Prisma.Mission$documentsArgs<ExtArgs>;
    invoices?: boolean | Prisma.Mission$invoicesArgs<ExtArgs>;
    _count?: boolean | Prisma.MissionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MissionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    patient?: boolean | Prisma.Mission$patientArgs<ExtArgs>;
    crew?: boolean | Prisma.Mission$crewArgs<ExtArgs>;
};
export type MissionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    patient?: boolean | Prisma.Mission$patientArgs<ExtArgs>;
    crew?: boolean | Prisma.Mission$crewArgs<ExtArgs>;
};
export type $MissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Mission";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        patient: Prisma.$PatientPayload<ExtArgs> | null;
        crew: Prisma.$CrewPayload<ExtArgs> | null;
        events: Prisma.$MissionEventPayload<ExtArgs>[];
        documents: Prisma.$DocumentPayload<ExtArgs>[];
        invoices: Prisma.$InvoicePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        status: $Enums.MissionStatus;
        priority: number;
        address: string | null;
        notes: string | null;
        scheduledAt: Date | null;
        startedAt: Date | null;
        completedAt: Date | null;
        patientId: string | null;
        crewId: string | null;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["mission"]>;
    composites: {};
};
export type MissionGetPayload<S extends boolean | null | undefined | MissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MissionPayload, S>;
export type MissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MissionCountAggregateInputType | true;
};
export interface MissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Mission'];
        meta: {
            name: 'Mission';
        };
    };
    findUnique<T extends MissionFindUniqueArgs>(args: Prisma.SelectSubset<T, MissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MissionClient<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MissionClient<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MissionFindFirstArgs>(args?: Prisma.SelectSubset<T, MissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__MissionClient<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MissionClient<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MissionFindManyArgs>(args?: Prisma.SelectSubset<T, MissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MissionCreateArgs>(args: Prisma.SelectSubset<T, MissionCreateArgs<ExtArgs>>): Prisma.Prisma__MissionClient<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MissionCreateManyArgs>(args?: Prisma.SelectSubset<T, MissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MissionDeleteArgs>(args: Prisma.SelectSubset<T, MissionDeleteArgs<ExtArgs>>): Prisma.Prisma__MissionClient<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MissionUpdateArgs>(args: Prisma.SelectSubset<T, MissionUpdateArgs<ExtArgs>>): Prisma.Prisma__MissionClient<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, MissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MissionUpdateManyArgs>(args: Prisma.SelectSubset<T, MissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MissionUpsertArgs>(args: Prisma.SelectSubset<T, MissionUpsertArgs<ExtArgs>>): Prisma.Prisma__MissionClient<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MissionCountArgs>(args?: Prisma.Subset<T, MissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MissionCountAggregateOutputType> : number>;
    aggregate<T extends MissionAggregateArgs>(args: Prisma.Subset<T, MissionAggregateArgs>): Prisma.PrismaPromise<GetMissionAggregateType<T>>;
    groupBy<T extends MissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MissionGroupByArgs['orderBy'];
    } : {
        orderBy?: MissionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MissionFieldRefs;
}
export interface Prisma__MissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    patient<T extends Prisma.Mission$patientArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Mission$patientArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    crew<T extends Prisma.Mission$crewArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Mission$crewArgs<ExtArgs>>): Prisma.Prisma__CrewClient<runtime.Types.Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    events<T extends Prisma.Mission$eventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Mission$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    documents<T extends Prisma.Mission$documentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Mission$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    invoices<T extends Prisma.Mission$invoicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Mission$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MissionFieldRefs {
    readonly id: Prisma.FieldRef<"Mission", 'String'>;
    readonly status: Prisma.FieldRef<"Mission", 'MissionStatus'>;
    readonly priority: Prisma.FieldRef<"Mission", 'Int'>;
    readonly address: Prisma.FieldRef<"Mission", 'String'>;
    readonly notes: Prisma.FieldRef<"Mission", 'String'>;
    readonly scheduledAt: Prisma.FieldRef<"Mission", 'DateTime'>;
    readonly startedAt: Prisma.FieldRef<"Mission", 'DateTime'>;
    readonly completedAt: Prisma.FieldRef<"Mission", 'DateTime'>;
    readonly patientId: Prisma.FieldRef<"Mission", 'String'>;
    readonly crewId: Prisma.FieldRef<"Mission", 'String'>;
    readonly organizationId: Prisma.FieldRef<"Mission", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Mission", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Mission", 'DateTime'>;
}
export type MissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
    where: Prisma.MissionWhereUniqueInput;
};
export type MissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
    where: Prisma.MissionWhereUniqueInput;
};
export type MissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
    where?: Prisma.MissionWhereInput;
    orderBy?: Prisma.MissionOrderByWithRelationInput | Prisma.MissionOrderByWithRelationInput[];
    cursor?: Prisma.MissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MissionScalarFieldEnum | Prisma.MissionScalarFieldEnum[];
};
export type MissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
    where?: Prisma.MissionWhereInput;
    orderBy?: Prisma.MissionOrderByWithRelationInput | Prisma.MissionOrderByWithRelationInput[];
    cursor?: Prisma.MissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MissionScalarFieldEnum | Prisma.MissionScalarFieldEnum[];
};
export type MissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
    where?: Prisma.MissionWhereInput;
    orderBy?: Prisma.MissionOrderByWithRelationInput | Prisma.MissionOrderByWithRelationInput[];
    cursor?: Prisma.MissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MissionScalarFieldEnum | Prisma.MissionScalarFieldEnum[];
};
export type MissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MissionCreateInput, Prisma.MissionUncheckedCreateInput>;
};
export type MissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MissionCreateManyInput | Prisma.MissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    data: Prisma.MissionCreateManyInput | Prisma.MissionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MissionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MissionUpdateInput, Prisma.MissionUncheckedUpdateInput>;
    where: Prisma.MissionWhereUniqueInput;
};
export type MissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MissionUpdateManyMutationInput, Prisma.MissionUncheckedUpdateManyInput>;
    where?: Prisma.MissionWhereInput;
    limit?: number;
};
export type MissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MissionUpdateManyMutationInput, Prisma.MissionUncheckedUpdateManyInput>;
    where?: Prisma.MissionWhereInput;
    limit?: number;
    include?: Prisma.MissionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
    where: Prisma.MissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.MissionCreateInput, Prisma.MissionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MissionUpdateInput, Prisma.MissionUncheckedUpdateInput>;
};
export type MissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
    where: Prisma.MissionWhereUniqueInput;
};
export type MissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MissionWhereInput;
    limit?: number;
};
export type Mission$patientArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where?: Prisma.PatientWhereInput;
};
export type Mission$crewArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewSelect<ExtArgs> | null;
    omit?: Prisma.CrewOmit<ExtArgs> | null;
    include?: Prisma.CrewInclude<ExtArgs> | null;
    where?: Prisma.CrewWhereInput;
};
export type Mission$eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionEventSelect<ExtArgs> | null;
    omit?: Prisma.MissionEventOmit<ExtArgs> | null;
    include?: Prisma.MissionEventInclude<ExtArgs> | null;
    where?: Prisma.MissionEventWhereInput;
    orderBy?: Prisma.MissionEventOrderByWithRelationInput | Prisma.MissionEventOrderByWithRelationInput[];
    cursor?: Prisma.MissionEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MissionEventScalarFieldEnum | Prisma.MissionEventScalarFieldEnum[];
};
export type Mission$documentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentScalarFieldEnum | Prisma.DocumentScalarFieldEnum[];
};
export type Mission$invoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[];
};
export type MissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
};
