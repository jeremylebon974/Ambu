import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type InvoiceModel = runtime.Types.Result.DefaultSelection<Prisma.$InvoicePayload>;
export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null;
    _avg: InvoiceAvgAggregateOutputType | null;
    _sum: InvoiceSumAggregateOutputType | null;
    _min: InvoiceMinAggregateOutputType | null;
    _max: InvoiceMaxAggregateOutputType | null;
};
export type InvoiceAvgAggregateOutputType = {
    amount: number | null;
    vatRate: number | null;
};
export type InvoiceSumAggregateOutputType = {
    amount: number | null;
    vatRate: number | null;
};
export type InvoiceMinAggregateOutputType = {
    id: string | null;
    number: string | null;
    status: $Enums.InvoiceStatus | null;
    amount: number | null;
    vatRate: number | null;
    dueDate: Date | null;
    paidAt: Date | null;
    notes: string | null;
    missionId: string | null;
    patientId: string | null;
    organizationId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type InvoiceMaxAggregateOutputType = {
    id: string | null;
    number: string | null;
    status: $Enums.InvoiceStatus | null;
    amount: number | null;
    vatRate: number | null;
    dueDate: Date | null;
    paidAt: Date | null;
    notes: string | null;
    missionId: string | null;
    patientId: string | null;
    organizationId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type InvoiceCountAggregateOutputType = {
    id: number;
    number: number;
    status: number;
    amount: number;
    vatRate: number;
    dueDate: number;
    paidAt: number;
    notes: number;
    missionId: number;
    patientId: number;
    organizationId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type InvoiceAvgAggregateInputType = {
    amount?: true;
    vatRate?: true;
};
export type InvoiceSumAggregateInputType = {
    amount?: true;
    vatRate?: true;
};
export type InvoiceMinAggregateInputType = {
    id?: true;
    number?: true;
    status?: true;
    amount?: true;
    vatRate?: true;
    dueDate?: true;
    paidAt?: true;
    notes?: true;
    missionId?: true;
    patientId?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type InvoiceMaxAggregateInputType = {
    id?: true;
    number?: true;
    status?: true;
    amount?: true;
    vatRate?: true;
    dueDate?: true;
    paidAt?: true;
    notes?: true;
    missionId?: true;
    patientId?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type InvoiceCountAggregateInputType = {
    id?: true;
    number?: true;
    status?: true;
    amount?: true;
    vatRate?: true;
    dueDate?: true;
    paidAt?: true;
    notes?: true;
    missionId?: true;
    patientId?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type InvoiceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithRelationInput | Prisma.InvoiceOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvoiceCountAggregateInputType;
    _avg?: InvoiceAvgAggregateInputType;
    _sum?: InvoiceSumAggregateInputType;
    _min?: InvoiceMinAggregateInputType;
    _max?: InvoiceMaxAggregateInputType;
};
export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
    [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvoice[P]> : Prisma.GetScalarType<T[P], AggregateInvoice[P]>;
};
export type InvoiceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
    orderBy?: Prisma.InvoiceOrderByWithAggregationInput | Prisma.InvoiceOrderByWithAggregationInput[];
    by: Prisma.InvoiceScalarFieldEnum[] | Prisma.InvoiceScalarFieldEnum;
    having?: Prisma.InvoiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvoiceCountAggregateInputType | true;
    _avg?: InvoiceAvgAggregateInputType;
    _sum?: InvoiceSumAggregateInputType;
    _min?: InvoiceMinAggregateInputType;
    _max?: InvoiceMaxAggregateInputType;
};
export type InvoiceGroupByOutputType = {
    id: string;
    number: string;
    status: $Enums.InvoiceStatus;
    amount: number;
    vatRate: number;
    dueDate: Date | null;
    paidAt: Date | null;
    notes: string | null;
    missionId: string | null;
    patientId: string | null;
    organizationId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: InvoiceCountAggregateOutputType | null;
    _avg: InvoiceAvgAggregateOutputType | null;
    _sum: InvoiceSumAggregateOutputType | null;
    _min: InvoiceMinAggregateOutputType | null;
    _max: InvoiceMaxAggregateOutputType | null;
};
export type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvoiceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvoiceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvoiceGroupByOutputType[P]>;
}>>;
export type InvoiceWhereInput = {
    AND?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    OR?: Prisma.InvoiceWhereInput[];
    NOT?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    id?: Prisma.StringFilter<"Invoice"> | string;
    number?: Prisma.StringFilter<"Invoice"> | string;
    status?: Prisma.EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus;
    amount?: Prisma.FloatFilter<"Invoice"> | number;
    vatRate?: Prisma.FloatFilter<"Invoice"> | number;
    dueDate?: Prisma.DateTimeNullableFilter<"Invoice"> | Date | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"Invoice"> | Date | string | null;
    notes?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    missionId?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    patientId?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    organizationId?: Prisma.StringFilter<"Invoice"> | string;
    createdAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    mission?: Prisma.XOR<Prisma.MissionNullableScalarRelationFilter, Prisma.MissionWhereInput> | null;
    patient?: Prisma.XOR<Prisma.PatientNullableScalarRelationFilter, Prisma.PatientWhereInput> | null;
    lines?: Prisma.InvoiceLineListRelationFilter;
};
export type InvoiceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    vatRate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    missionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    patientId?: Prisma.SortOrderInput | Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    mission?: Prisma.MissionOrderByWithRelationInput;
    patient?: Prisma.PatientOrderByWithRelationInput;
    lines?: Prisma.InvoiceLineOrderByRelationAggregateInput;
};
export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    number?: string;
    AND?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    OR?: Prisma.InvoiceWhereInput[];
    NOT?: Prisma.InvoiceWhereInput | Prisma.InvoiceWhereInput[];
    status?: Prisma.EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus;
    amount?: Prisma.FloatFilter<"Invoice"> | number;
    vatRate?: Prisma.FloatFilter<"Invoice"> | number;
    dueDate?: Prisma.DateTimeNullableFilter<"Invoice"> | Date | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"Invoice"> | Date | string | null;
    notes?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    missionId?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    patientId?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    organizationId?: Prisma.StringFilter<"Invoice"> | string;
    createdAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    mission?: Prisma.XOR<Prisma.MissionNullableScalarRelationFilter, Prisma.MissionWhereInput> | null;
    patient?: Prisma.XOR<Prisma.PatientNullableScalarRelationFilter, Prisma.PatientWhereInput> | null;
    lines?: Prisma.InvoiceLineListRelationFilter;
}, "id" | "number">;
export type InvoiceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    vatRate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    paidAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    missionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    patientId?: Prisma.SortOrderInput | Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.InvoiceCountOrderByAggregateInput;
    _avg?: Prisma.InvoiceAvgOrderByAggregateInput;
    _max?: Prisma.InvoiceMaxOrderByAggregateInput;
    _min?: Prisma.InvoiceMinOrderByAggregateInput;
    _sum?: Prisma.InvoiceSumOrderByAggregateInput;
};
export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvoiceScalarWhereWithAggregatesInput | Prisma.InvoiceScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvoiceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvoiceScalarWhereWithAggregatesInput | Prisma.InvoiceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Invoice"> | string;
    number?: Prisma.StringWithAggregatesFilter<"Invoice"> | string;
    status?: Prisma.EnumInvoiceStatusWithAggregatesFilter<"Invoice"> | $Enums.InvoiceStatus;
    amount?: Prisma.FloatWithAggregatesFilter<"Invoice"> | number;
    vatRate?: Prisma.FloatWithAggregatesFilter<"Invoice"> | number;
    dueDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null;
    paidAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    missionId?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    patientId?: Prisma.StringNullableWithAggregatesFilter<"Invoice"> | string | null;
    organizationId?: Prisma.StringWithAggregatesFilter<"Invoice"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Invoice"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Invoice"> | Date | string;
};
export type InvoiceCreateInput = {
    id?: string;
    number: string;
    status?: $Enums.InvoiceStatus;
    amount: number;
    vatRate?: number;
    dueDate?: Date | string | null;
    paidAt?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutInvoicesInput;
    mission?: Prisma.MissionCreateNestedOneWithoutInvoicesInput;
    patient?: Prisma.PatientCreateNestedOneWithoutInvoicesInput;
    lines?: Prisma.InvoiceLineCreateNestedManyWithoutInvoiceInput;
};
export type InvoiceUncheckedCreateInput = {
    id?: string;
    number: string;
    status?: $Enums.InvoiceStatus;
    amount: number;
    vatRate?: number;
    dueDate?: Date | string | null;
    paidAt?: Date | string | null;
    notes?: string | null;
    missionId?: string | null;
    patientId?: string | null;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lines?: Prisma.InvoiceLineUncheckedCreateNestedManyWithoutInvoiceInput;
};
export type InvoiceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    vatRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutInvoicesNestedInput;
    mission?: Prisma.MissionUpdateOneWithoutInvoicesNestedInput;
    patient?: Prisma.PatientUpdateOneWithoutInvoicesNestedInput;
    lines?: Prisma.InvoiceLineUpdateManyWithoutInvoiceNestedInput;
};
export type InvoiceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    vatRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    missionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lines?: Prisma.InvoiceLineUncheckedUpdateManyWithoutInvoiceNestedInput;
};
export type InvoiceCreateManyInput = {
    id?: string;
    number: string;
    status?: $Enums.InvoiceStatus;
    amount: number;
    vatRate?: number;
    dueDate?: Date | string | null;
    paidAt?: Date | string | null;
    notes?: string | null;
    missionId?: string | null;
    patientId?: string | null;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    vatRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    vatRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    missionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceListRelationFilter = {
    every?: Prisma.InvoiceWhereInput;
    some?: Prisma.InvoiceWhereInput;
    none?: Prisma.InvoiceWhereInput;
};
export type InvoiceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvoiceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    vatRate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InvoiceAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
    vatRate?: Prisma.SortOrder;
};
export type InvoiceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    vatRate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InvoiceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    vatRate?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InvoiceSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
    vatRate?: Prisma.SortOrder;
};
export type InvoiceScalarRelationFilter = {
    is?: Prisma.InvoiceWhereInput;
    isNot?: Prisma.InvoiceWhereInput;
};
export type InvoiceCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutOrganizationInput, Prisma.InvoiceUncheckedCreateWithoutOrganizationInput> | Prisma.InvoiceCreateWithoutOrganizationInput[] | Prisma.InvoiceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutOrganizationInput | Prisma.InvoiceCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.InvoiceCreateManyOrganizationInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutOrganizationInput, Prisma.InvoiceUncheckedCreateWithoutOrganizationInput> | Prisma.InvoiceCreateWithoutOrganizationInput[] | Prisma.InvoiceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutOrganizationInput | Prisma.InvoiceCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.InvoiceCreateManyOrganizationInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutOrganizationInput, Prisma.InvoiceUncheckedCreateWithoutOrganizationInput> | Prisma.InvoiceCreateWithoutOrganizationInput[] | Prisma.InvoiceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutOrganizationInput | Prisma.InvoiceCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.InvoiceCreateManyOrganizationInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutOrganizationInput | Prisma.InvoiceUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutOrganizationInput, Prisma.InvoiceUncheckedCreateWithoutOrganizationInput> | Prisma.InvoiceCreateWithoutOrganizationInput[] | Prisma.InvoiceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutOrganizationInput | Prisma.InvoiceCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.InvoiceCreateManyOrganizationInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutOrganizationInput | Prisma.InvoiceUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutPatientInput, Prisma.InvoiceUncheckedCreateWithoutPatientInput> | Prisma.InvoiceCreateWithoutPatientInput[] | Prisma.InvoiceUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutPatientInput | Prisma.InvoiceCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.InvoiceCreateManyPatientInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUncheckedCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutPatientInput, Prisma.InvoiceUncheckedCreateWithoutPatientInput> | Prisma.InvoiceCreateWithoutPatientInput[] | Prisma.InvoiceUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutPatientInput | Prisma.InvoiceCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.InvoiceCreateManyPatientInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutPatientInput, Prisma.InvoiceUncheckedCreateWithoutPatientInput> | Prisma.InvoiceCreateWithoutPatientInput[] | Prisma.InvoiceUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutPatientInput | Prisma.InvoiceCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutPatientInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.InvoiceCreateManyPatientInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutPatientInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutPatientInput | Prisma.InvoiceUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutPatientInput, Prisma.InvoiceUncheckedCreateWithoutPatientInput> | Prisma.InvoiceCreateWithoutPatientInput[] | Prisma.InvoiceUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutPatientInput | Prisma.InvoiceCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutPatientInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.InvoiceCreateManyPatientInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutPatientInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutPatientInput | Prisma.InvoiceUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceCreateNestedManyWithoutMissionInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutMissionInput, Prisma.InvoiceUncheckedCreateWithoutMissionInput> | Prisma.InvoiceCreateWithoutMissionInput[] | Prisma.InvoiceUncheckedCreateWithoutMissionInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutMissionInput | Prisma.InvoiceCreateOrConnectWithoutMissionInput[];
    createMany?: Prisma.InvoiceCreateManyMissionInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUncheckedCreateNestedManyWithoutMissionInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutMissionInput, Prisma.InvoiceUncheckedCreateWithoutMissionInput> | Prisma.InvoiceCreateWithoutMissionInput[] | Prisma.InvoiceUncheckedCreateWithoutMissionInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutMissionInput | Prisma.InvoiceCreateOrConnectWithoutMissionInput[];
    createMany?: Prisma.InvoiceCreateManyMissionInputEnvelope;
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
};
export type InvoiceUpdateManyWithoutMissionNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutMissionInput, Prisma.InvoiceUncheckedCreateWithoutMissionInput> | Prisma.InvoiceCreateWithoutMissionInput[] | Prisma.InvoiceUncheckedCreateWithoutMissionInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutMissionInput | Prisma.InvoiceCreateOrConnectWithoutMissionInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutMissionInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutMissionInput[];
    createMany?: Prisma.InvoiceCreateManyMissionInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutMissionInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutMissionInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutMissionInput | Prisma.InvoiceUpdateManyWithWhereWithoutMissionInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type InvoiceUncheckedUpdateManyWithoutMissionNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutMissionInput, Prisma.InvoiceUncheckedCreateWithoutMissionInput> | Prisma.InvoiceCreateWithoutMissionInput[] | Prisma.InvoiceUncheckedCreateWithoutMissionInput[];
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutMissionInput | Prisma.InvoiceCreateOrConnectWithoutMissionInput[];
    upsert?: Prisma.InvoiceUpsertWithWhereUniqueWithoutMissionInput | Prisma.InvoiceUpsertWithWhereUniqueWithoutMissionInput[];
    createMany?: Prisma.InvoiceCreateManyMissionInputEnvelope;
    set?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    disconnect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    delete?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    connect?: Prisma.InvoiceWhereUniqueInput | Prisma.InvoiceWhereUniqueInput[];
    update?: Prisma.InvoiceUpdateWithWhereUniqueWithoutMissionInput | Prisma.InvoiceUpdateWithWhereUniqueWithoutMissionInput[];
    updateMany?: Prisma.InvoiceUpdateManyWithWhereWithoutMissionInput | Prisma.InvoiceUpdateManyWithWhereWithoutMissionInput[];
    deleteMany?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
};
export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus;
};
export type InvoiceCreateNestedOneWithoutLinesInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutLinesInput, Prisma.InvoiceUncheckedCreateWithoutLinesInput>;
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutLinesInput;
    connect?: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceUpdateOneRequiredWithoutLinesNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceCreateWithoutLinesInput, Prisma.InvoiceUncheckedCreateWithoutLinesInput>;
    connectOrCreate?: Prisma.InvoiceCreateOrConnectWithoutLinesInput;
    upsert?: Prisma.InvoiceUpsertWithoutLinesInput;
    connect?: Prisma.InvoiceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InvoiceUpdateToOneWithWhereWithoutLinesInput, Prisma.InvoiceUpdateWithoutLinesInput>, Prisma.InvoiceUncheckedUpdateWithoutLinesInput>;
};
export type InvoiceCreateWithoutOrganizationInput = {
    id?: string;
    number: string;
    status?: $Enums.InvoiceStatus;
    amount: number;
    vatRate?: number;
    dueDate?: Date | string | null;
    paidAt?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mission?: Prisma.MissionCreateNestedOneWithoutInvoicesInput;
    patient?: Prisma.PatientCreateNestedOneWithoutInvoicesInput;
    lines?: Prisma.InvoiceLineCreateNestedManyWithoutInvoiceInput;
};
export type InvoiceUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    number: string;
    status?: $Enums.InvoiceStatus;
    amount: number;
    vatRate?: number;
    dueDate?: Date | string | null;
    paidAt?: Date | string | null;
    notes?: string | null;
    missionId?: string | null;
    patientId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lines?: Prisma.InvoiceLineUncheckedCreateNestedManyWithoutInvoiceInput;
};
export type InvoiceCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutOrganizationInput, Prisma.InvoiceUncheckedCreateWithoutOrganizationInput>;
};
export type InvoiceCreateManyOrganizationInputEnvelope = {
    data: Prisma.InvoiceCreateManyOrganizationInput | Prisma.InvoiceCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type InvoiceUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvoiceUpdateWithoutOrganizationInput, Prisma.InvoiceUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutOrganizationInput, Prisma.InvoiceUncheckedCreateWithoutOrganizationInput>;
};
export type InvoiceUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateWithoutOrganizationInput, Prisma.InvoiceUncheckedUpdateWithoutOrganizationInput>;
};
export type InvoiceUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.InvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyWithoutOrganizationInput>;
};
export type InvoiceScalarWhereInput = {
    AND?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
    OR?: Prisma.InvoiceScalarWhereInput[];
    NOT?: Prisma.InvoiceScalarWhereInput | Prisma.InvoiceScalarWhereInput[];
    id?: Prisma.StringFilter<"Invoice"> | string;
    number?: Prisma.StringFilter<"Invoice"> | string;
    status?: Prisma.EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus;
    amount?: Prisma.FloatFilter<"Invoice"> | number;
    vatRate?: Prisma.FloatFilter<"Invoice"> | number;
    dueDate?: Prisma.DateTimeNullableFilter<"Invoice"> | Date | string | null;
    paidAt?: Prisma.DateTimeNullableFilter<"Invoice"> | Date | string | null;
    notes?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    missionId?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    patientId?: Prisma.StringNullableFilter<"Invoice"> | string | null;
    organizationId?: Prisma.StringFilter<"Invoice"> | string;
    createdAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Invoice"> | Date | string;
};
export type InvoiceCreateWithoutPatientInput = {
    id?: string;
    number: string;
    status?: $Enums.InvoiceStatus;
    amount: number;
    vatRate?: number;
    dueDate?: Date | string | null;
    paidAt?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutInvoicesInput;
    mission?: Prisma.MissionCreateNestedOneWithoutInvoicesInput;
    lines?: Prisma.InvoiceLineCreateNestedManyWithoutInvoiceInput;
};
export type InvoiceUncheckedCreateWithoutPatientInput = {
    id?: string;
    number: string;
    status?: $Enums.InvoiceStatus;
    amount: number;
    vatRate?: number;
    dueDate?: Date | string | null;
    paidAt?: Date | string | null;
    notes?: string | null;
    missionId?: string | null;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lines?: Prisma.InvoiceLineUncheckedCreateNestedManyWithoutInvoiceInput;
};
export type InvoiceCreateOrConnectWithoutPatientInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutPatientInput, Prisma.InvoiceUncheckedCreateWithoutPatientInput>;
};
export type InvoiceCreateManyPatientInputEnvelope = {
    data: Prisma.InvoiceCreateManyPatientInput | Prisma.InvoiceCreateManyPatientInput[];
    skipDuplicates?: boolean;
};
export type InvoiceUpsertWithWhereUniqueWithoutPatientInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvoiceUpdateWithoutPatientInput, Prisma.InvoiceUncheckedUpdateWithoutPatientInput>;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutPatientInput, Prisma.InvoiceUncheckedCreateWithoutPatientInput>;
};
export type InvoiceUpdateWithWhereUniqueWithoutPatientInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateWithoutPatientInput, Prisma.InvoiceUncheckedUpdateWithoutPatientInput>;
};
export type InvoiceUpdateManyWithWhereWithoutPatientInput = {
    where: Prisma.InvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyWithoutPatientInput>;
};
export type InvoiceCreateWithoutMissionInput = {
    id?: string;
    number: string;
    status?: $Enums.InvoiceStatus;
    amount: number;
    vatRate?: number;
    dueDate?: Date | string | null;
    paidAt?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutInvoicesInput;
    patient?: Prisma.PatientCreateNestedOneWithoutInvoicesInput;
    lines?: Prisma.InvoiceLineCreateNestedManyWithoutInvoiceInput;
};
export type InvoiceUncheckedCreateWithoutMissionInput = {
    id?: string;
    number: string;
    status?: $Enums.InvoiceStatus;
    amount: number;
    vatRate?: number;
    dueDate?: Date | string | null;
    paidAt?: Date | string | null;
    notes?: string | null;
    patientId?: string | null;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lines?: Prisma.InvoiceLineUncheckedCreateNestedManyWithoutInvoiceInput;
};
export type InvoiceCreateOrConnectWithoutMissionInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutMissionInput, Prisma.InvoiceUncheckedCreateWithoutMissionInput>;
};
export type InvoiceCreateManyMissionInputEnvelope = {
    data: Prisma.InvoiceCreateManyMissionInput | Prisma.InvoiceCreateManyMissionInput[];
    skipDuplicates?: boolean;
};
export type InvoiceUpsertWithWhereUniqueWithoutMissionInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvoiceUpdateWithoutMissionInput, Prisma.InvoiceUncheckedUpdateWithoutMissionInput>;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutMissionInput, Prisma.InvoiceUncheckedCreateWithoutMissionInput>;
};
export type InvoiceUpdateWithWhereUniqueWithoutMissionInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateWithoutMissionInput, Prisma.InvoiceUncheckedUpdateWithoutMissionInput>;
};
export type InvoiceUpdateManyWithWhereWithoutMissionInput = {
    where: Prisma.InvoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyWithoutMissionInput>;
};
export type InvoiceCreateWithoutLinesInput = {
    id?: string;
    number: string;
    status?: $Enums.InvoiceStatus;
    amount: number;
    vatRate?: number;
    dueDate?: Date | string | null;
    paidAt?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutInvoicesInput;
    mission?: Prisma.MissionCreateNestedOneWithoutInvoicesInput;
    patient?: Prisma.PatientCreateNestedOneWithoutInvoicesInput;
};
export type InvoiceUncheckedCreateWithoutLinesInput = {
    id?: string;
    number: string;
    status?: $Enums.InvoiceStatus;
    amount: number;
    vatRate?: number;
    dueDate?: Date | string | null;
    paidAt?: Date | string | null;
    notes?: string | null;
    missionId?: string | null;
    patientId?: string | null;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceCreateOrConnectWithoutLinesInput = {
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutLinesInput, Prisma.InvoiceUncheckedCreateWithoutLinesInput>;
};
export type InvoiceUpsertWithoutLinesInput = {
    update: Prisma.XOR<Prisma.InvoiceUpdateWithoutLinesInput, Prisma.InvoiceUncheckedUpdateWithoutLinesInput>;
    create: Prisma.XOR<Prisma.InvoiceCreateWithoutLinesInput, Prisma.InvoiceUncheckedCreateWithoutLinesInput>;
    where?: Prisma.InvoiceWhereInput;
};
export type InvoiceUpdateToOneWithWhereWithoutLinesInput = {
    where?: Prisma.InvoiceWhereInput;
    data: Prisma.XOR<Prisma.InvoiceUpdateWithoutLinesInput, Prisma.InvoiceUncheckedUpdateWithoutLinesInput>;
};
export type InvoiceUpdateWithoutLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    vatRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutInvoicesNestedInput;
    mission?: Prisma.MissionUpdateOneWithoutInvoicesNestedInput;
    patient?: Prisma.PatientUpdateOneWithoutInvoicesNestedInput;
};
export type InvoiceUncheckedUpdateWithoutLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    vatRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    missionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceCreateManyOrganizationInput = {
    id?: string;
    number: string;
    status?: $Enums.InvoiceStatus;
    amount: number;
    vatRate?: number;
    dueDate?: Date | string | null;
    paidAt?: Date | string | null;
    notes?: string | null;
    missionId?: string | null;
    patientId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    vatRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mission?: Prisma.MissionUpdateOneWithoutInvoicesNestedInput;
    patient?: Prisma.PatientUpdateOneWithoutInvoicesNestedInput;
    lines?: Prisma.InvoiceLineUpdateManyWithoutInvoiceNestedInput;
};
export type InvoiceUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    vatRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    missionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lines?: Prisma.InvoiceLineUncheckedUpdateManyWithoutInvoiceNestedInput;
};
export type InvoiceUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    vatRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    missionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceCreateManyPatientInput = {
    id?: string;
    number: string;
    status?: $Enums.InvoiceStatus;
    amount: number;
    vatRate?: number;
    dueDate?: Date | string | null;
    paidAt?: Date | string | null;
    notes?: string | null;
    missionId?: string | null;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    vatRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutInvoicesNestedInput;
    mission?: Prisma.MissionUpdateOneWithoutInvoicesNestedInput;
    lines?: Prisma.InvoiceLineUpdateManyWithoutInvoiceNestedInput;
};
export type InvoiceUncheckedUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    vatRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    missionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lines?: Prisma.InvoiceLineUncheckedUpdateManyWithoutInvoiceNestedInput;
};
export type InvoiceUncheckedUpdateManyWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    vatRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    missionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceCreateManyMissionInput = {
    id?: string;
    number: string;
    status?: $Enums.InvoiceStatus;
    amount: number;
    vatRate?: number;
    dueDate?: Date | string | null;
    paidAt?: Date | string | null;
    notes?: string | null;
    patientId?: string | null;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InvoiceUpdateWithoutMissionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    vatRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutInvoicesNestedInput;
    patient?: Prisma.PatientUpdateOneWithoutInvoicesNestedInput;
    lines?: Prisma.InvoiceLineUpdateManyWithoutInvoiceNestedInput;
};
export type InvoiceUncheckedUpdateWithoutMissionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    vatRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lines?: Prisma.InvoiceLineUncheckedUpdateManyWithoutInvoiceNestedInput;
};
export type InvoiceUncheckedUpdateManyWithoutMissionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    vatRate?: Prisma.FloatFieldUpdateOperationsInput | number;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    paidAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceCountOutputType = {
    lines: number;
};
export type InvoiceCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lines?: boolean | InvoiceCountOutputTypeCountLinesArgs;
};
export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceCountOutputTypeSelect<ExtArgs> | null;
};
export type InvoiceCountOutputTypeCountLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceLineWhereInput;
};
export type InvoiceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    number?: boolean;
    status?: boolean;
    amount?: boolean;
    vatRate?: boolean;
    dueDate?: boolean;
    paidAt?: boolean;
    notes?: boolean;
    missionId?: boolean;
    patientId?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    mission?: boolean | Prisma.Invoice$missionArgs<ExtArgs>;
    patient?: boolean | Prisma.Invoice$patientArgs<ExtArgs>;
    lines?: boolean | Prisma.Invoice$linesArgs<ExtArgs>;
    _count?: boolean | Prisma.InvoiceCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invoice"]>;
export type InvoiceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    number?: boolean;
    status?: boolean;
    amount?: boolean;
    vatRate?: boolean;
    dueDate?: boolean;
    paidAt?: boolean;
    notes?: boolean;
    missionId?: boolean;
    patientId?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    mission?: boolean | Prisma.Invoice$missionArgs<ExtArgs>;
    patient?: boolean | Prisma.Invoice$patientArgs<ExtArgs>;
}, ExtArgs["result"]["invoice"]>;
export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    number?: boolean;
    status?: boolean;
    amount?: boolean;
    vatRate?: boolean;
    dueDate?: boolean;
    paidAt?: boolean;
    notes?: boolean;
    missionId?: boolean;
    patientId?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    mission?: boolean | Prisma.Invoice$missionArgs<ExtArgs>;
    patient?: boolean | Prisma.Invoice$patientArgs<ExtArgs>;
}, ExtArgs["result"]["invoice"]>;
export type InvoiceSelectScalar = {
    id?: boolean;
    number?: boolean;
    status?: boolean;
    amount?: boolean;
    vatRate?: boolean;
    dueDate?: boolean;
    paidAt?: boolean;
    notes?: boolean;
    missionId?: boolean;
    patientId?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type InvoiceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "number" | "status" | "amount" | "vatRate" | "dueDate" | "paidAt" | "notes" | "missionId" | "patientId" | "organizationId" | "createdAt" | "updatedAt", ExtArgs["result"]["invoice"]>;
export type InvoiceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    mission?: boolean | Prisma.Invoice$missionArgs<ExtArgs>;
    patient?: boolean | Prisma.Invoice$patientArgs<ExtArgs>;
    lines?: boolean | Prisma.Invoice$linesArgs<ExtArgs>;
    _count?: boolean | Prisma.InvoiceCountOutputTypeDefaultArgs<ExtArgs>;
};
export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    mission?: boolean | Prisma.Invoice$missionArgs<ExtArgs>;
    patient?: boolean | Prisma.Invoice$patientArgs<ExtArgs>;
};
export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    mission?: boolean | Prisma.Invoice$missionArgs<ExtArgs>;
    patient?: boolean | Prisma.Invoice$patientArgs<ExtArgs>;
};
export type $InvoicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Invoice";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        mission: Prisma.$MissionPayload<ExtArgs> | null;
        patient: Prisma.$PatientPayload<ExtArgs> | null;
        lines: Prisma.$InvoiceLinePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        number: string;
        status: $Enums.InvoiceStatus;
        amount: number;
        vatRate: number;
        dueDate: Date | null;
        paidAt: Date | null;
        notes: string | null;
        missionId: string | null;
        patientId: string | null;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["invoice"]>;
    composites: {};
};
export type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvoicePayload, S>;
export type InvoiceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvoiceCountAggregateInputType | true;
};
export interface InvoiceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Invoice'];
        meta: {
            name: 'Invoice';
        };
    };
    findUnique<T extends InvoiceFindUniqueArgs>(args: Prisma.SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvoiceFindFirstArgs>(args?: Prisma.SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvoiceFindManyArgs>(args?: Prisma.SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvoiceCreateArgs>(args: Prisma.SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvoiceCreateManyArgs>(args?: Prisma.SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InvoiceDeleteArgs>(args: Prisma.SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvoiceUpdateArgs>(args: Prisma.SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvoiceUpdateManyArgs>(args: Prisma.SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InvoiceUpsertArgs>(args: Prisma.SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvoiceCountArgs>(args?: Prisma.Subset<T, InvoiceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvoiceCountAggregateOutputType> : number>;
    aggregate<T extends InvoiceAggregateArgs>(args: Prisma.Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>;
    groupBy<T extends InvoiceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvoiceGroupByArgs['orderBy'];
    } : {
        orderBy?: InvoiceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvoiceFieldRefs;
}
export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    mission<T extends Prisma.Invoice$missionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Invoice$missionArgs<ExtArgs>>): Prisma.Prisma__MissionClient<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    patient<T extends Prisma.Invoice$patientArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Invoice$patientArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    lines<T extends Prisma.Invoice$linesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Invoice$linesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvoiceFieldRefs {
    readonly id: Prisma.FieldRef<"Invoice", 'String'>;
    readonly number: Prisma.FieldRef<"Invoice", 'String'>;
    readonly status: Prisma.FieldRef<"Invoice", 'InvoiceStatus'>;
    readonly amount: Prisma.FieldRef<"Invoice", 'Float'>;
    readonly vatRate: Prisma.FieldRef<"Invoice", 'Float'>;
    readonly dueDate: Prisma.FieldRef<"Invoice", 'DateTime'>;
    readonly paidAt: Prisma.FieldRef<"Invoice", 'DateTime'>;
    readonly notes: Prisma.FieldRef<"Invoice", 'String'>;
    readonly missionId: Prisma.FieldRef<"Invoice", 'String'>;
    readonly patientId: Prisma.FieldRef<"Invoice", 'String'>;
    readonly organizationId: Prisma.FieldRef<"Invoice", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Invoice", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Invoice", 'DateTime'>;
}
export type InvoiceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InvoiceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InvoiceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InvoiceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvoiceCreateInput, Prisma.InvoiceUncheckedCreateInput>;
};
export type InvoiceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvoiceCreateManyInput | Prisma.InvoiceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvoiceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    data: Prisma.InvoiceCreateManyInput | Prisma.InvoiceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InvoiceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InvoiceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvoiceUpdateInput, Prisma.InvoiceUncheckedUpdateInput>;
    where: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyInput>;
    where?: Prisma.InvoiceWhereInput;
    limit?: number;
};
export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvoiceUpdateManyMutationInput, Prisma.InvoiceUncheckedUpdateManyInput>;
    where?: Prisma.InvoiceWhereInput;
    limit?: number;
    include?: Prisma.InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InvoiceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where: Prisma.InvoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceCreateInput, Prisma.InvoiceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvoiceUpdateInput, Prisma.InvoiceUncheckedUpdateInput>;
};
export type InvoiceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where: Prisma.InvoiceWhereUniqueInput;
};
export type InvoiceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
    limit?: number;
};
export type Invoice$missionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
    where?: Prisma.MissionWhereInput;
};
export type Invoice$patientArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where?: Prisma.PatientWhereInput;
};
export type Invoice$linesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceLineSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceLineOmit<ExtArgs> | null;
    include?: Prisma.InvoiceLineInclude<ExtArgs> | null;
    where?: Prisma.InvoiceLineWhereInput;
    orderBy?: Prisma.InvoiceLineOrderByWithRelationInput | Prisma.InvoiceLineOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceLineScalarFieldEnum | Prisma.InvoiceLineScalarFieldEnum[];
};
export type InvoiceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
};
