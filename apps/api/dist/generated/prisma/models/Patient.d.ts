import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type PatientModel = runtime.Types.Result.DefaultSelection<Prisma.$PatientPayload>;
export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null;
    _min: PatientMinAggregateOutputType | null;
    _max: PatientMaxAggregateOutputType | null;
};
export type PatientMinAggregateOutputType = {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    birthDate: Date | null;
    gender: string | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    socialNumber: string | null;
    isActive: boolean | null;
    organizationId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PatientMaxAggregateOutputType = {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    birthDate: Date | null;
    gender: string | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    socialNumber: string | null;
    isActive: boolean | null;
    organizationId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PatientCountAggregateOutputType = {
    id: number;
    firstName: number;
    lastName: number;
    birthDate: number;
    gender: number;
    address: number;
    phone: number;
    email: number;
    socialNumber: number;
    isActive: number;
    organizationId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PatientMinAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    birthDate?: true;
    gender?: true;
    address?: true;
    phone?: true;
    email?: true;
    socialNumber?: true;
    isActive?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PatientMaxAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    birthDate?: true;
    gender?: true;
    address?: true;
    phone?: true;
    email?: true;
    socialNumber?: true;
    isActive?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PatientCountAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    birthDate?: true;
    gender?: true;
    address?: true;
    phone?: true;
    email?: true;
    socialNumber?: true;
    isActive?: true;
    organizationId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PatientAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientWhereInput;
    orderBy?: Prisma.PatientOrderByWithRelationInput | Prisma.PatientOrderByWithRelationInput[];
    cursor?: Prisma.PatientWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PatientCountAggregateInputType;
    _min?: PatientMinAggregateInputType;
    _max?: PatientMaxAggregateInputType;
};
export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
    [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePatient[P]> : Prisma.GetScalarType<T[P], AggregatePatient[P]>;
};
export type PatientGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientWhereInput;
    orderBy?: Prisma.PatientOrderByWithAggregationInput | Prisma.PatientOrderByWithAggregationInput[];
    by: Prisma.PatientScalarFieldEnum[] | Prisma.PatientScalarFieldEnum;
    having?: Prisma.PatientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatientCountAggregateInputType | true;
    _min?: PatientMinAggregateInputType;
    _max?: PatientMaxAggregateInputType;
};
export type PatientGroupByOutputType = {
    id: string;
    firstName: string;
    lastName: string;
    birthDate: Date | null;
    gender: string | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    socialNumber: string | null;
    isActive: boolean;
    organizationId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: PatientCountAggregateOutputType | null;
    _min: PatientMinAggregateOutputType | null;
    _max: PatientMaxAggregateOutputType | null;
};
export type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PatientGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PatientGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PatientGroupByOutputType[P]>;
}>>;
export type PatientWhereInput = {
    AND?: Prisma.PatientWhereInput | Prisma.PatientWhereInput[];
    OR?: Prisma.PatientWhereInput[];
    NOT?: Prisma.PatientWhereInput | Prisma.PatientWhereInput[];
    id?: Prisma.StringFilter<"Patient"> | string;
    firstName?: Prisma.StringFilter<"Patient"> | string;
    lastName?: Prisma.StringFilter<"Patient"> | string;
    birthDate?: Prisma.DateTimeNullableFilter<"Patient"> | Date | string | null;
    gender?: Prisma.StringNullableFilter<"Patient"> | string | null;
    address?: Prisma.StringNullableFilter<"Patient"> | string | null;
    phone?: Prisma.StringNullableFilter<"Patient"> | string | null;
    email?: Prisma.StringNullableFilter<"Patient"> | string | null;
    socialNumber?: Prisma.StringNullableFilter<"Patient"> | string | null;
    isActive?: Prisma.BoolFilter<"Patient"> | boolean;
    organizationId?: Prisma.StringFilter<"Patient"> | string;
    createdAt?: Prisma.DateTimeFilter<"Patient"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Patient"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    missions?: Prisma.MissionListRelationFilter;
    documents?: Prisma.DocumentListRelationFilter;
    prescriptions?: Prisma.PrescriptionListRelationFilter;
    mutuelles?: Prisma.MutuelleListRelationFilter;
    invoices?: Prisma.InvoiceListRelationFilter;
};
export type PatientOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    gender?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    socialNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
    missions?: Prisma.MissionOrderByRelationAggregateInput;
    documents?: Prisma.DocumentOrderByRelationAggregateInput;
    prescriptions?: Prisma.PrescriptionOrderByRelationAggregateInput;
    mutuelles?: Prisma.MutuelleOrderByRelationAggregateInput;
    invoices?: Prisma.InvoiceOrderByRelationAggregateInput;
};
export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PatientWhereInput | Prisma.PatientWhereInput[];
    OR?: Prisma.PatientWhereInput[];
    NOT?: Prisma.PatientWhereInput | Prisma.PatientWhereInput[];
    firstName?: Prisma.StringFilter<"Patient"> | string;
    lastName?: Prisma.StringFilter<"Patient"> | string;
    birthDate?: Prisma.DateTimeNullableFilter<"Patient"> | Date | string | null;
    gender?: Prisma.StringNullableFilter<"Patient"> | string | null;
    address?: Prisma.StringNullableFilter<"Patient"> | string | null;
    phone?: Prisma.StringNullableFilter<"Patient"> | string | null;
    email?: Prisma.StringNullableFilter<"Patient"> | string | null;
    socialNumber?: Prisma.StringNullableFilter<"Patient"> | string | null;
    isActive?: Prisma.BoolFilter<"Patient"> | boolean;
    organizationId?: Prisma.StringFilter<"Patient"> | string;
    createdAt?: Prisma.DateTimeFilter<"Patient"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Patient"> | Date | string;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
    missions?: Prisma.MissionListRelationFilter;
    documents?: Prisma.DocumentListRelationFilter;
    prescriptions?: Prisma.PrescriptionListRelationFilter;
    mutuelles?: Prisma.MutuelleListRelationFilter;
    invoices?: Prisma.InvoiceListRelationFilter;
}, "id">;
export type PatientOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    gender?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    socialNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PatientCountOrderByAggregateInput;
    _max?: Prisma.PatientMaxOrderByAggregateInput;
    _min?: Prisma.PatientMinOrderByAggregateInput;
};
export type PatientScalarWhereWithAggregatesInput = {
    AND?: Prisma.PatientScalarWhereWithAggregatesInput | Prisma.PatientScalarWhereWithAggregatesInput[];
    OR?: Prisma.PatientScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PatientScalarWhereWithAggregatesInput | Prisma.PatientScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Patient"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"Patient"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"Patient"> | string;
    birthDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null;
    gender?: Prisma.StringNullableWithAggregatesFilter<"Patient"> | string | null;
    address?: Prisma.StringNullableWithAggregatesFilter<"Patient"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Patient"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"Patient"> | string | null;
    socialNumber?: Prisma.StringNullableWithAggregatesFilter<"Patient"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Patient"> | boolean;
    organizationId?: Prisma.StringWithAggregatesFilter<"Patient"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Patient"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Patient"> | Date | string;
};
export type PatientCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate?: Date | string | null;
    gender?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    socialNumber?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutPatientsInput;
    missions?: Prisma.MissionCreateNestedManyWithoutPatientInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutPatientInput;
    prescriptions?: Prisma.PrescriptionCreateNestedManyWithoutPatientInput;
    mutuelles?: Prisma.MutuelleCreateNestedManyWithoutPatientInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutPatientInput;
};
export type PatientUncheckedCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate?: Date | string | null;
    gender?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    socialNumber?: string | null;
    isActive?: boolean;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    missions?: Prisma.MissionUncheckedCreateNestedManyWithoutPatientInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutPatientInput;
    prescriptions?: Prisma.PrescriptionUncheckedCreateNestedManyWithoutPatientInput;
    mutuelles?: Prisma.MutuelleUncheckedCreateNestedManyWithoutPatientInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutPatientInput;
};
export type PatientUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    socialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutPatientsNestedInput;
    missions?: Prisma.MissionUpdateManyWithoutPatientNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutPatientNestedInput;
    prescriptions?: Prisma.PrescriptionUpdateManyWithoutPatientNestedInput;
    mutuelles?: Prisma.MutuelleUpdateManyWithoutPatientNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutPatientNestedInput;
};
export type PatientUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    socialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    missions?: Prisma.MissionUncheckedUpdateManyWithoutPatientNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutPatientNestedInput;
    prescriptions?: Prisma.PrescriptionUncheckedUpdateManyWithoutPatientNestedInput;
    mutuelles?: Prisma.MutuelleUncheckedUpdateManyWithoutPatientNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutPatientNestedInput;
};
export type PatientCreateManyInput = {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate?: Date | string | null;
    gender?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    socialNumber?: string | null;
    isActive?: boolean;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PatientUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    socialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    socialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientListRelationFilter = {
    every?: Prisma.PatientWhereInput;
    some?: Prisma.PatientWhereInput;
    none?: Prisma.PatientWhereInput;
};
export type PatientOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PatientCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    socialNumber?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PatientMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    socialNumber?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PatientMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    socialNumber?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PatientNullableScalarRelationFilter = {
    is?: Prisma.PatientWhereInput | null;
    isNot?: Prisma.PatientWhereInput | null;
};
export type PatientScalarRelationFilter = {
    is?: Prisma.PatientWhereInput;
    isNot?: Prisma.PatientWhereInput;
};
export type PatientCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutOrganizationInput, Prisma.PatientUncheckedCreateWithoutOrganizationInput> | Prisma.PatientCreateWithoutOrganizationInput[] | Prisma.PatientUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutOrganizationInput | Prisma.PatientCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.PatientCreateManyOrganizationInputEnvelope;
    connect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
};
export type PatientUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutOrganizationInput, Prisma.PatientUncheckedCreateWithoutOrganizationInput> | Prisma.PatientCreateWithoutOrganizationInput[] | Prisma.PatientUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutOrganizationInput | Prisma.PatientCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.PatientCreateManyOrganizationInputEnvelope;
    connect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
};
export type PatientUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutOrganizationInput, Prisma.PatientUncheckedCreateWithoutOrganizationInput> | Prisma.PatientCreateWithoutOrganizationInput[] | Prisma.PatientUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutOrganizationInput | Prisma.PatientCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.PatientUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.PatientUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.PatientCreateManyOrganizationInputEnvelope;
    set?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    disconnect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    delete?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    connect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    update?: Prisma.PatientUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.PatientUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.PatientUpdateManyWithWhereWithoutOrganizationInput | Prisma.PatientUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.PatientScalarWhereInput | Prisma.PatientScalarWhereInput[];
};
export type PatientUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutOrganizationInput, Prisma.PatientUncheckedCreateWithoutOrganizationInput> | Prisma.PatientCreateWithoutOrganizationInput[] | Prisma.PatientUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutOrganizationInput | Prisma.PatientCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.PatientUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.PatientUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.PatientCreateManyOrganizationInputEnvelope;
    set?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    disconnect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    delete?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    connect?: Prisma.PatientWhereUniqueInput | Prisma.PatientWhereUniqueInput[];
    update?: Prisma.PatientUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.PatientUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.PatientUpdateManyWithWhereWithoutOrganizationInput | Prisma.PatientUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.PatientScalarWhereInput | Prisma.PatientScalarWhereInput[];
};
export type PatientCreateNestedOneWithoutMissionsInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutMissionsInput, Prisma.PatientUncheckedCreateWithoutMissionsInput>;
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutMissionsInput;
    connect?: Prisma.PatientWhereUniqueInput;
};
export type PatientUpdateOneWithoutMissionsNestedInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutMissionsInput, Prisma.PatientUncheckedCreateWithoutMissionsInput>;
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutMissionsInput;
    upsert?: Prisma.PatientUpsertWithoutMissionsInput;
    disconnect?: Prisma.PatientWhereInput | boolean;
    delete?: Prisma.PatientWhereInput | boolean;
    connect?: Prisma.PatientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PatientUpdateToOneWithWhereWithoutMissionsInput, Prisma.PatientUpdateWithoutMissionsInput>, Prisma.PatientUncheckedUpdateWithoutMissionsInput>;
};
export type PatientCreateNestedOneWithoutDocumentsInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutDocumentsInput, Prisma.PatientUncheckedCreateWithoutDocumentsInput>;
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutDocumentsInput;
    connect?: Prisma.PatientWhereUniqueInput;
};
export type PatientUpdateOneWithoutDocumentsNestedInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutDocumentsInput, Prisma.PatientUncheckedCreateWithoutDocumentsInput>;
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutDocumentsInput;
    upsert?: Prisma.PatientUpsertWithoutDocumentsInput;
    disconnect?: Prisma.PatientWhereInput | boolean;
    delete?: Prisma.PatientWhereInput | boolean;
    connect?: Prisma.PatientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PatientUpdateToOneWithWhereWithoutDocumentsInput, Prisma.PatientUpdateWithoutDocumentsInput>, Prisma.PatientUncheckedUpdateWithoutDocumentsInput>;
};
export type PatientCreateNestedOneWithoutPrescriptionsInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutPrescriptionsInput, Prisma.PatientUncheckedCreateWithoutPrescriptionsInput>;
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutPrescriptionsInput;
    connect?: Prisma.PatientWhereUniqueInput;
};
export type PatientUpdateOneRequiredWithoutPrescriptionsNestedInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutPrescriptionsInput, Prisma.PatientUncheckedCreateWithoutPrescriptionsInput>;
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutPrescriptionsInput;
    upsert?: Prisma.PatientUpsertWithoutPrescriptionsInput;
    connect?: Prisma.PatientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PatientUpdateToOneWithWhereWithoutPrescriptionsInput, Prisma.PatientUpdateWithoutPrescriptionsInput>, Prisma.PatientUncheckedUpdateWithoutPrescriptionsInput>;
};
export type PatientCreateNestedOneWithoutInvoicesInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutInvoicesInput, Prisma.PatientUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutInvoicesInput;
    connect?: Prisma.PatientWhereUniqueInput;
};
export type PatientUpdateOneWithoutInvoicesNestedInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutInvoicesInput, Prisma.PatientUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutInvoicesInput;
    upsert?: Prisma.PatientUpsertWithoutInvoicesInput;
    disconnect?: Prisma.PatientWhereInput | boolean;
    delete?: Prisma.PatientWhereInput | boolean;
    connect?: Prisma.PatientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PatientUpdateToOneWithWhereWithoutInvoicesInput, Prisma.PatientUpdateWithoutInvoicesInput>, Prisma.PatientUncheckedUpdateWithoutInvoicesInput>;
};
export type PatientCreateNestedOneWithoutMutuellesInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutMutuellesInput, Prisma.PatientUncheckedCreateWithoutMutuellesInput>;
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutMutuellesInput;
    connect?: Prisma.PatientWhereUniqueInput;
};
export type PatientUpdateOneRequiredWithoutMutuellesNestedInput = {
    create?: Prisma.XOR<Prisma.PatientCreateWithoutMutuellesInput, Prisma.PatientUncheckedCreateWithoutMutuellesInput>;
    connectOrCreate?: Prisma.PatientCreateOrConnectWithoutMutuellesInput;
    upsert?: Prisma.PatientUpsertWithoutMutuellesInput;
    connect?: Prisma.PatientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PatientUpdateToOneWithWhereWithoutMutuellesInput, Prisma.PatientUpdateWithoutMutuellesInput>, Prisma.PatientUncheckedUpdateWithoutMutuellesInput>;
};
export type PatientCreateWithoutOrganizationInput = {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate?: Date | string | null;
    gender?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    socialNumber?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    missions?: Prisma.MissionCreateNestedManyWithoutPatientInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutPatientInput;
    prescriptions?: Prisma.PrescriptionCreateNestedManyWithoutPatientInput;
    mutuelles?: Prisma.MutuelleCreateNestedManyWithoutPatientInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutPatientInput;
};
export type PatientUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate?: Date | string | null;
    gender?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    socialNumber?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    missions?: Prisma.MissionUncheckedCreateNestedManyWithoutPatientInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutPatientInput;
    prescriptions?: Prisma.PrescriptionUncheckedCreateNestedManyWithoutPatientInput;
    mutuelles?: Prisma.MutuelleUncheckedCreateNestedManyWithoutPatientInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutPatientInput;
};
export type PatientCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.PatientWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientCreateWithoutOrganizationInput, Prisma.PatientUncheckedCreateWithoutOrganizationInput>;
};
export type PatientCreateManyOrganizationInputEnvelope = {
    data: Prisma.PatientCreateManyOrganizationInput | Prisma.PatientCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type PatientUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.PatientWhereUniqueInput;
    update: Prisma.XOR<Prisma.PatientUpdateWithoutOrganizationInput, Prisma.PatientUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.PatientCreateWithoutOrganizationInput, Prisma.PatientUncheckedCreateWithoutOrganizationInput>;
};
export type PatientUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.PatientWhereUniqueInput;
    data: Prisma.XOR<Prisma.PatientUpdateWithoutOrganizationInput, Prisma.PatientUncheckedUpdateWithoutOrganizationInput>;
};
export type PatientUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.PatientScalarWhereInput;
    data: Prisma.XOR<Prisma.PatientUpdateManyMutationInput, Prisma.PatientUncheckedUpdateManyWithoutOrganizationInput>;
};
export type PatientScalarWhereInput = {
    AND?: Prisma.PatientScalarWhereInput | Prisma.PatientScalarWhereInput[];
    OR?: Prisma.PatientScalarWhereInput[];
    NOT?: Prisma.PatientScalarWhereInput | Prisma.PatientScalarWhereInput[];
    id?: Prisma.StringFilter<"Patient"> | string;
    firstName?: Prisma.StringFilter<"Patient"> | string;
    lastName?: Prisma.StringFilter<"Patient"> | string;
    birthDate?: Prisma.DateTimeNullableFilter<"Patient"> | Date | string | null;
    gender?: Prisma.StringNullableFilter<"Patient"> | string | null;
    address?: Prisma.StringNullableFilter<"Patient"> | string | null;
    phone?: Prisma.StringNullableFilter<"Patient"> | string | null;
    email?: Prisma.StringNullableFilter<"Patient"> | string | null;
    socialNumber?: Prisma.StringNullableFilter<"Patient"> | string | null;
    isActive?: Prisma.BoolFilter<"Patient"> | boolean;
    organizationId?: Prisma.StringFilter<"Patient"> | string;
    createdAt?: Prisma.DateTimeFilter<"Patient"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Patient"> | Date | string;
};
export type PatientCreateWithoutMissionsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate?: Date | string | null;
    gender?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    socialNumber?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutPatientsInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutPatientInput;
    prescriptions?: Prisma.PrescriptionCreateNestedManyWithoutPatientInput;
    mutuelles?: Prisma.MutuelleCreateNestedManyWithoutPatientInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutPatientInput;
};
export type PatientUncheckedCreateWithoutMissionsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate?: Date | string | null;
    gender?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    socialNumber?: string | null;
    isActive?: boolean;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutPatientInput;
    prescriptions?: Prisma.PrescriptionUncheckedCreateNestedManyWithoutPatientInput;
    mutuelles?: Prisma.MutuelleUncheckedCreateNestedManyWithoutPatientInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutPatientInput;
};
export type PatientCreateOrConnectWithoutMissionsInput = {
    where: Prisma.PatientWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientCreateWithoutMissionsInput, Prisma.PatientUncheckedCreateWithoutMissionsInput>;
};
export type PatientUpsertWithoutMissionsInput = {
    update: Prisma.XOR<Prisma.PatientUpdateWithoutMissionsInput, Prisma.PatientUncheckedUpdateWithoutMissionsInput>;
    create: Prisma.XOR<Prisma.PatientCreateWithoutMissionsInput, Prisma.PatientUncheckedCreateWithoutMissionsInput>;
    where?: Prisma.PatientWhereInput;
};
export type PatientUpdateToOneWithWhereWithoutMissionsInput = {
    where?: Prisma.PatientWhereInput;
    data: Prisma.XOR<Prisma.PatientUpdateWithoutMissionsInput, Prisma.PatientUncheckedUpdateWithoutMissionsInput>;
};
export type PatientUpdateWithoutMissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    socialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutPatientsNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutPatientNestedInput;
    prescriptions?: Prisma.PrescriptionUpdateManyWithoutPatientNestedInput;
    mutuelles?: Prisma.MutuelleUpdateManyWithoutPatientNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutPatientNestedInput;
};
export type PatientUncheckedUpdateWithoutMissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    socialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutPatientNestedInput;
    prescriptions?: Prisma.PrescriptionUncheckedUpdateManyWithoutPatientNestedInput;
    mutuelles?: Prisma.MutuelleUncheckedUpdateManyWithoutPatientNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutPatientNestedInput;
};
export type PatientCreateWithoutDocumentsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate?: Date | string | null;
    gender?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    socialNumber?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutPatientsInput;
    missions?: Prisma.MissionCreateNestedManyWithoutPatientInput;
    prescriptions?: Prisma.PrescriptionCreateNestedManyWithoutPatientInput;
    mutuelles?: Prisma.MutuelleCreateNestedManyWithoutPatientInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutPatientInput;
};
export type PatientUncheckedCreateWithoutDocumentsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate?: Date | string | null;
    gender?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    socialNumber?: string | null;
    isActive?: boolean;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    missions?: Prisma.MissionUncheckedCreateNestedManyWithoutPatientInput;
    prescriptions?: Prisma.PrescriptionUncheckedCreateNestedManyWithoutPatientInput;
    mutuelles?: Prisma.MutuelleUncheckedCreateNestedManyWithoutPatientInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutPatientInput;
};
export type PatientCreateOrConnectWithoutDocumentsInput = {
    where: Prisma.PatientWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientCreateWithoutDocumentsInput, Prisma.PatientUncheckedCreateWithoutDocumentsInput>;
};
export type PatientUpsertWithoutDocumentsInput = {
    update: Prisma.XOR<Prisma.PatientUpdateWithoutDocumentsInput, Prisma.PatientUncheckedUpdateWithoutDocumentsInput>;
    create: Prisma.XOR<Prisma.PatientCreateWithoutDocumentsInput, Prisma.PatientUncheckedCreateWithoutDocumentsInput>;
    where?: Prisma.PatientWhereInput;
};
export type PatientUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: Prisma.PatientWhereInput;
    data: Prisma.XOR<Prisma.PatientUpdateWithoutDocumentsInput, Prisma.PatientUncheckedUpdateWithoutDocumentsInput>;
};
export type PatientUpdateWithoutDocumentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    socialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutPatientsNestedInput;
    missions?: Prisma.MissionUpdateManyWithoutPatientNestedInput;
    prescriptions?: Prisma.PrescriptionUpdateManyWithoutPatientNestedInput;
    mutuelles?: Prisma.MutuelleUpdateManyWithoutPatientNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutPatientNestedInput;
};
export type PatientUncheckedUpdateWithoutDocumentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    socialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    missions?: Prisma.MissionUncheckedUpdateManyWithoutPatientNestedInput;
    prescriptions?: Prisma.PrescriptionUncheckedUpdateManyWithoutPatientNestedInput;
    mutuelles?: Prisma.MutuelleUncheckedUpdateManyWithoutPatientNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutPatientNestedInput;
};
export type PatientCreateWithoutPrescriptionsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate?: Date | string | null;
    gender?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    socialNumber?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutPatientsInput;
    missions?: Prisma.MissionCreateNestedManyWithoutPatientInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutPatientInput;
    mutuelles?: Prisma.MutuelleCreateNestedManyWithoutPatientInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutPatientInput;
};
export type PatientUncheckedCreateWithoutPrescriptionsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate?: Date | string | null;
    gender?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    socialNumber?: string | null;
    isActive?: boolean;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    missions?: Prisma.MissionUncheckedCreateNestedManyWithoutPatientInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutPatientInput;
    mutuelles?: Prisma.MutuelleUncheckedCreateNestedManyWithoutPatientInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutPatientInput;
};
export type PatientCreateOrConnectWithoutPrescriptionsInput = {
    where: Prisma.PatientWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientCreateWithoutPrescriptionsInput, Prisma.PatientUncheckedCreateWithoutPrescriptionsInput>;
};
export type PatientUpsertWithoutPrescriptionsInput = {
    update: Prisma.XOR<Prisma.PatientUpdateWithoutPrescriptionsInput, Prisma.PatientUncheckedUpdateWithoutPrescriptionsInput>;
    create: Prisma.XOR<Prisma.PatientCreateWithoutPrescriptionsInput, Prisma.PatientUncheckedCreateWithoutPrescriptionsInput>;
    where?: Prisma.PatientWhereInput;
};
export type PatientUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: Prisma.PatientWhereInput;
    data: Prisma.XOR<Prisma.PatientUpdateWithoutPrescriptionsInput, Prisma.PatientUncheckedUpdateWithoutPrescriptionsInput>;
};
export type PatientUpdateWithoutPrescriptionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    socialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutPatientsNestedInput;
    missions?: Prisma.MissionUpdateManyWithoutPatientNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutPatientNestedInput;
    mutuelles?: Prisma.MutuelleUpdateManyWithoutPatientNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutPatientNestedInput;
};
export type PatientUncheckedUpdateWithoutPrescriptionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    socialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    missions?: Prisma.MissionUncheckedUpdateManyWithoutPatientNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutPatientNestedInput;
    mutuelles?: Prisma.MutuelleUncheckedUpdateManyWithoutPatientNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutPatientNestedInput;
};
export type PatientCreateWithoutInvoicesInput = {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate?: Date | string | null;
    gender?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    socialNumber?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutPatientsInput;
    missions?: Prisma.MissionCreateNestedManyWithoutPatientInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutPatientInput;
    prescriptions?: Prisma.PrescriptionCreateNestedManyWithoutPatientInput;
    mutuelles?: Prisma.MutuelleCreateNestedManyWithoutPatientInput;
};
export type PatientUncheckedCreateWithoutInvoicesInput = {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate?: Date | string | null;
    gender?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    socialNumber?: string | null;
    isActive?: boolean;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    missions?: Prisma.MissionUncheckedCreateNestedManyWithoutPatientInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutPatientInput;
    prescriptions?: Prisma.PrescriptionUncheckedCreateNestedManyWithoutPatientInput;
    mutuelles?: Prisma.MutuelleUncheckedCreateNestedManyWithoutPatientInput;
};
export type PatientCreateOrConnectWithoutInvoicesInput = {
    where: Prisma.PatientWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientCreateWithoutInvoicesInput, Prisma.PatientUncheckedCreateWithoutInvoicesInput>;
};
export type PatientUpsertWithoutInvoicesInput = {
    update: Prisma.XOR<Prisma.PatientUpdateWithoutInvoicesInput, Prisma.PatientUncheckedUpdateWithoutInvoicesInput>;
    create: Prisma.XOR<Prisma.PatientCreateWithoutInvoicesInput, Prisma.PatientUncheckedCreateWithoutInvoicesInput>;
    where?: Prisma.PatientWhereInput;
};
export type PatientUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: Prisma.PatientWhereInput;
    data: Prisma.XOR<Prisma.PatientUpdateWithoutInvoicesInput, Prisma.PatientUncheckedUpdateWithoutInvoicesInput>;
};
export type PatientUpdateWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    socialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutPatientsNestedInput;
    missions?: Prisma.MissionUpdateManyWithoutPatientNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutPatientNestedInput;
    prescriptions?: Prisma.PrescriptionUpdateManyWithoutPatientNestedInput;
    mutuelles?: Prisma.MutuelleUpdateManyWithoutPatientNestedInput;
};
export type PatientUncheckedUpdateWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    socialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    missions?: Prisma.MissionUncheckedUpdateManyWithoutPatientNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutPatientNestedInput;
    prescriptions?: Prisma.PrescriptionUncheckedUpdateManyWithoutPatientNestedInput;
    mutuelles?: Prisma.MutuelleUncheckedUpdateManyWithoutPatientNestedInput;
};
export type PatientCreateWithoutMutuellesInput = {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate?: Date | string | null;
    gender?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    socialNumber?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutPatientsInput;
    missions?: Prisma.MissionCreateNestedManyWithoutPatientInput;
    documents?: Prisma.DocumentCreateNestedManyWithoutPatientInput;
    prescriptions?: Prisma.PrescriptionCreateNestedManyWithoutPatientInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutPatientInput;
};
export type PatientUncheckedCreateWithoutMutuellesInput = {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate?: Date | string | null;
    gender?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    socialNumber?: string | null;
    isActive?: boolean;
    organizationId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    missions?: Prisma.MissionUncheckedCreateNestedManyWithoutPatientInput;
    documents?: Prisma.DocumentUncheckedCreateNestedManyWithoutPatientInput;
    prescriptions?: Prisma.PrescriptionUncheckedCreateNestedManyWithoutPatientInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutPatientInput;
};
export type PatientCreateOrConnectWithoutMutuellesInput = {
    where: Prisma.PatientWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientCreateWithoutMutuellesInput, Prisma.PatientUncheckedCreateWithoutMutuellesInput>;
};
export type PatientUpsertWithoutMutuellesInput = {
    update: Prisma.XOR<Prisma.PatientUpdateWithoutMutuellesInput, Prisma.PatientUncheckedUpdateWithoutMutuellesInput>;
    create: Prisma.XOR<Prisma.PatientCreateWithoutMutuellesInput, Prisma.PatientUncheckedCreateWithoutMutuellesInput>;
    where?: Prisma.PatientWhereInput;
};
export type PatientUpdateToOneWithWhereWithoutMutuellesInput = {
    where?: Prisma.PatientWhereInput;
    data: Prisma.XOR<Prisma.PatientUpdateWithoutMutuellesInput, Prisma.PatientUncheckedUpdateWithoutMutuellesInput>;
};
export type PatientUpdateWithoutMutuellesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    socialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutPatientsNestedInput;
    missions?: Prisma.MissionUpdateManyWithoutPatientNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutPatientNestedInput;
    prescriptions?: Prisma.PrescriptionUpdateManyWithoutPatientNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutPatientNestedInput;
};
export type PatientUncheckedUpdateWithoutMutuellesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    socialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    organizationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    missions?: Prisma.MissionUncheckedUpdateManyWithoutPatientNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutPatientNestedInput;
    prescriptions?: Prisma.PrescriptionUncheckedUpdateManyWithoutPatientNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutPatientNestedInput;
};
export type PatientCreateManyOrganizationInput = {
    id?: string;
    firstName: string;
    lastName: string;
    birthDate?: Date | string | null;
    gender?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    socialNumber?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PatientUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    socialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    missions?: Prisma.MissionUpdateManyWithoutPatientNestedInput;
    documents?: Prisma.DocumentUpdateManyWithoutPatientNestedInput;
    prescriptions?: Prisma.PrescriptionUpdateManyWithoutPatientNestedInput;
    mutuelles?: Prisma.MutuelleUpdateManyWithoutPatientNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutPatientNestedInput;
};
export type PatientUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    socialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    missions?: Prisma.MissionUncheckedUpdateManyWithoutPatientNestedInput;
    documents?: Prisma.DocumentUncheckedUpdateManyWithoutPatientNestedInput;
    prescriptions?: Prisma.PrescriptionUncheckedUpdateManyWithoutPatientNestedInput;
    mutuelles?: Prisma.MutuelleUncheckedUpdateManyWithoutPatientNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutPatientNestedInput;
};
export type PatientUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    socialNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientCountOutputType = {
    missions: number;
    documents: number;
    prescriptions: number;
    mutuelles: number;
    invoices: number;
};
export type PatientCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    missions?: boolean | PatientCountOutputTypeCountMissionsArgs;
    documents?: boolean | PatientCountOutputTypeCountDocumentsArgs;
    prescriptions?: boolean | PatientCountOutputTypeCountPrescriptionsArgs;
    mutuelles?: boolean | PatientCountOutputTypeCountMutuellesArgs;
    invoices?: boolean | PatientCountOutputTypeCountInvoicesArgs;
};
export type PatientCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientCountOutputTypeSelect<ExtArgs> | null;
};
export type PatientCountOutputTypeCountMissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MissionWhereInput;
};
export type PatientCountOutputTypeCountDocumentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
};
export type PatientCountOutputTypeCountPrescriptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrescriptionWhereInput;
};
export type PatientCountOutputTypeCountMutuellesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MutuelleWhereInput;
};
export type PatientCountOutputTypeCountInvoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
};
export type PatientSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    birthDate?: boolean;
    gender?: boolean;
    address?: boolean;
    phone?: boolean;
    email?: boolean;
    socialNumber?: boolean;
    isActive?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    missions?: boolean | Prisma.Patient$missionsArgs<ExtArgs>;
    documents?: boolean | Prisma.Patient$documentsArgs<ExtArgs>;
    prescriptions?: boolean | Prisma.Patient$prescriptionsArgs<ExtArgs>;
    mutuelles?: boolean | Prisma.Patient$mutuellesArgs<ExtArgs>;
    invoices?: boolean | Prisma.Patient$invoicesArgs<ExtArgs>;
    _count?: boolean | Prisma.PatientCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patient"]>;
export type PatientSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    birthDate?: boolean;
    gender?: boolean;
    address?: boolean;
    phone?: boolean;
    email?: boolean;
    socialNumber?: boolean;
    isActive?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patient"]>;
export type PatientSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    birthDate?: boolean;
    gender?: boolean;
    address?: boolean;
    phone?: boolean;
    email?: boolean;
    socialNumber?: boolean;
    isActive?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patient"]>;
export type PatientSelectScalar = {
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    birthDate?: boolean;
    gender?: boolean;
    address?: boolean;
    phone?: boolean;
    email?: boolean;
    socialNumber?: boolean;
    isActive?: boolean;
    organizationId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PatientOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "firstName" | "lastName" | "birthDate" | "gender" | "address" | "phone" | "email" | "socialNumber" | "isActive" | "organizationId" | "createdAt" | "updatedAt", ExtArgs["result"]["patient"]>;
export type PatientInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
    missions?: boolean | Prisma.Patient$missionsArgs<ExtArgs>;
    documents?: boolean | Prisma.Patient$documentsArgs<ExtArgs>;
    prescriptions?: boolean | Prisma.Patient$prescriptionsArgs<ExtArgs>;
    mutuelles?: boolean | Prisma.Patient$mutuellesArgs<ExtArgs>;
    invoices?: boolean | Prisma.Patient$invoicesArgs<ExtArgs>;
    _count?: boolean | Prisma.PatientCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PatientIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type PatientIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $PatientPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Patient";
    objects: {
        organization: Prisma.$OrganizationPayload<ExtArgs>;
        missions: Prisma.$MissionPayload<ExtArgs>[];
        documents: Prisma.$DocumentPayload<ExtArgs>[];
        prescriptions: Prisma.$PrescriptionPayload<ExtArgs>[];
        mutuelles: Prisma.$MutuellePayload<ExtArgs>[];
        invoices: Prisma.$InvoicePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        firstName: string;
        lastName: string;
        birthDate: Date | null;
        gender: string | null;
        address: string | null;
        phone: string | null;
        email: string | null;
        socialNumber: string | null;
        isActive: boolean;
        organizationId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["patient"]>;
    composites: {};
};
export type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PatientPayload, S>;
export type PatientCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PatientCountAggregateInputType | true;
};
export interface PatientDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Patient'];
        meta: {
            name: 'Patient';
        };
    };
    findUnique<T extends PatientFindUniqueArgs>(args: Prisma.SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PatientFindFirstArgs>(args?: Prisma.SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PatientFindManyArgs>(args?: Prisma.SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PatientCreateArgs>(args: Prisma.SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PatientCreateManyArgs>(args?: Prisma.SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PatientDeleteArgs>(args: Prisma.SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PatientUpdateArgs>(args: Prisma.SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PatientDeleteManyArgs>(args?: Prisma.SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PatientUpdateManyArgs>(args: Prisma.SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PatientUpsertArgs>(args: Prisma.SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PatientCountArgs>(args?: Prisma.Subset<T, PatientCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PatientCountAggregateOutputType> : number>;
    aggregate<T extends PatientAggregateArgs>(args: Prisma.Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>;
    groupBy<T extends PatientGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PatientGroupByArgs['orderBy'];
    } : {
        orderBy?: PatientGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PatientFieldRefs;
}
export interface Prisma__PatientClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    missions<T extends Prisma.Patient$missionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Patient$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    documents<T extends Prisma.Patient$documentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Patient$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    prescriptions<T extends Prisma.Patient$prescriptionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Patient$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    mutuelles<T extends Prisma.Patient$mutuellesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Patient$mutuellesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MutuellePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    invoices<T extends Prisma.Patient$invoicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Patient$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PatientFieldRefs {
    readonly id: Prisma.FieldRef<"Patient", 'String'>;
    readonly firstName: Prisma.FieldRef<"Patient", 'String'>;
    readonly lastName: Prisma.FieldRef<"Patient", 'String'>;
    readonly birthDate: Prisma.FieldRef<"Patient", 'DateTime'>;
    readonly gender: Prisma.FieldRef<"Patient", 'String'>;
    readonly address: Prisma.FieldRef<"Patient", 'String'>;
    readonly phone: Prisma.FieldRef<"Patient", 'String'>;
    readonly email: Prisma.FieldRef<"Patient", 'String'>;
    readonly socialNumber: Prisma.FieldRef<"Patient", 'String'>;
    readonly isActive: Prisma.FieldRef<"Patient", 'Boolean'>;
    readonly organizationId: Prisma.FieldRef<"Patient", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Patient", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Patient", 'DateTime'>;
}
export type PatientFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where: Prisma.PatientWhereUniqueInput;
};
export type PatientFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where: Prisma.PatientWhereUniqueInput;
};
export type PatientFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where?: Prisma.PatientWhereInput;
    orderBy?: Prisma.PatientOrderByWithRelationInput | Prisma.PatientOrderByWithRelationInput[];
    cursor?: Prisma.PatientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientScalarFieldEnum | Prisma.PatientScalarFieldEnum[];
};
export type PatientFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where?: Prisma.PatientWhereInput;
    orderBy?: Prisma.PatientOrderByWithRelationInput | Prisma.PatientOrderByWithRelationInput[];
    cursor?: Prisma.PatientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientScalarFieldEnum | Prisma.PatientScalarFieldEnum[];
};
export type PatientFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where?: Prisma.PatientWhereInput;
    orderBy?: Prisma.PatientOrderByWithRelationInput | Prisma.PatientOrderByWithRelationInput[];
    cursor?: Prisma.PatientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientScalarFieldEnum | Prisma.PatientScalarFieldEnum[];
};
export type PatientCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientCreateInput, Prisma.PatientUncheckedCreateInput>;
};
export type PatientCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PatientCreateManyInput | Prisma.PatientCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PatientCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    data: Prisma.PatientCreateManyInput | Prisma.PatientCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PatientIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PatientUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientUpdateInput, Prisma.PatientUncheckedUpdateInput>;
    where: Prisma.PatientWhereUniqueInput;
};
export type PatientUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PatientUpdateManyMutationInput, Prisma.PatientUncheckedUpdateManyInput>;
    where?: Prisma.PatientWhereInput;
    limit?: number;
};
export type PatientUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientUpdateManyMutationInput, Prisma.PatientUncheckedUpdateManyInput>;
    where?: Prisma.PatientWhereInput;
    limit?: number;
    include?: Prisma.PatientIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PatientUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where: Prisma.PatientWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientCreateInput, Prisma.PatientUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PatientUpdateInput, Prisma.PatientUncheckedUpdateInput>;
};
export type PatientDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where: Prisma.PatientWhereUniqueInput;
};
export type PatientDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientWhereInput;
    limit?: number;
};
export type Patient$missionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Patient$documentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Patient$prescriptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Patient$mutuellesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MutuelleSelect<ExtArgs> | null;
    omit?: Prisma.MutuelleOmit<ExtArgs> | null;
    include?: Prisma.MutuelleInclude<ExtArgs> | null;
    where?: Prisma.MutuelleWhereInput;
    orderBy?: Prisma.MutuelleOrderByWithRelationInput | Prisma.MutuelleOrderByWithRelationInput[];
    cursor?: Prisma.MutuelleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MutuelleScalarFieldEnum | Prisma.MutuelleScalarFieldEnum[];
};
export type Patient$invoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PatientDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
};
