import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type OrganizationModel = runtime.Types.Result.DefaultSelection<Prisma.$OrganizationPayload>;
export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
};
export type OrganizationMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    siret: string | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    siret: string | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrganizationCountAggregateOutputType = {
    id: number;
    name: number;
    siret: number;
    address: number;
    phone: number;
    email: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OrganizationMinAggregateInputType = {
    id?: true;
    name?: true;
    siret?: true;
    address?: true;
    phone?: true;
    email?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrganizationMaxAggregateInputType = {
    id?: true;
    name?: true;
    siret?: true;
    address?: true;
    phone?: true;
    email?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrganizationCountAggregateInputType = {
    id?: true;
    name?: true;
    siret?: true;
    address?: true;
    phone?: true;
    email?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OrganizationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrganizationCountAggregateInputType;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
};
export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrganization[P]> : Prisma.GetScalarType<T[P], AggregateOrganization[P]>;
};
export type OrganizationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithAggregationInput | Prisma.OrganizationOrderByWithAggregationInput[];
    by: Prisma.OrganizationScalarFieldEnum[] | Prisma.OrganizationScalarFieldEnum;
    having?: Prisma.OrganizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
};
export type OrganizationGroupByOutputType = {
    id: string;
    name: string;
    siret: string | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
};
export type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrganizationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
}>>;
export type OrganizationWhereInput = {
    AND?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    OR?: Prisma.OrganizationWhereInput[];
    NOT?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    id?: Prisma.StringFilter<"Organization"> | string;
    name?: Prisma.StringFilter<"Organization"> | string;
    siret?: Prisma.StringNullableFilter<"Organization"> | string | null;
    address?: Prisma.StringNullableFilter<"Organization"> | string | null;
    phone?: Prisma.StringNullableFilter<"Organization"> | string | null;
    email?: Prisma.StringNullableFilter<"Organization"> | string | null;
    isActive?: Prisma.BoolFilter<"Organization"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    users?: Prisma.UserListRelationFilter;
    patients?: Prisma.PatientListRelationFilter;
    vehicles?: Prisma.VehicleListRelationFilter;
    missions?: Prisma.MissionListRelationFilter;
    invoices?: Prisma.InvoiceListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
};
export type OrganizationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    siret?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    users?: Prisma.UserOrderByRelationAggregateInput;
    patients?: Prisma.PatientOrderByRelationAggregateInput;
    vehicles?: Prisma.VehicleOrderByRelationAggregateInput;
    missions?: Prisma.MissionOrderByRelationAggregateInput;
    invoices?: Prisma.InvoiceOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    auditLogs?: Prisma.AuditLogOrderByRelationAggregateInput;
};
export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    siret?: string;
    AND?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    OR?: Prisma.OrganizationWhereInput[];
    NOT?: Prisma.OrganizationWhereInput | Prisma.OrganizationWhereInput[];
    name?: Prisma.StringFilter<"Organization"> | string;
    address?: Prisma.StringNullableFilter<"Organization"> | string | null;
    phone?: Prisma.StringNullableFilter<"Organization"> | string | null;
    email?: Prisma.StringNullableFilter<"Organization"> | string | null;
    isActive?: Prisma.BoolFilter<"Organization"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Organization"> | Date | string;
    users?: Prisma.UserListRelationFilter;
    patients?: Prisma.PatientListRelationFilter;
    vehicles?: Prisma.VehicleListRelationFilter;
    missions?: Prisma.MissionListRelationFilter;
    invoices?: Prisma.InvoiceListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
}, "id" | "siret">;
export type OrganizationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    siret?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OrganizationCountOrderByAggregateInput;
    _max?: Prisma.OrganizationMaxOrderByAggregateInput;
    _min?: Prisma.OrganizationMinOrderByAggregateInput;
};
export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrganizationScalarWhereWithAggregatesInput | Prisma.OrganizationScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrganizationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrganizationScalarWhereWithAggregatesInput | Prisma.OrganizationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Organization"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Organization"> | string;
    siret?: Prisma.StringNullableWithAggregatesFilter<"Organization"> | string | null;
    address?: Prisma.StringNullableWithAggregatesFilter<"Organization"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Organization"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"Organization"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Organization"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Organization"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Organization"> | Date | string;
};
export type OrganizationCreateInput = {
    id?: string;
    name: string;
    siret?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutOrganizationInput;
    patients?: Prisma.PatientCreateNestedManyWithoutOrganizationInput;
    vehicles?: Prisma.VehicleCreateNestedManyWithoutOrganizationInput;
    missions?: Prisma.MissionCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutOrganizationInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateInput = {
    id?: string;
    name: string;
    siret?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutOrganizationInput;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutOrganizationInput;
    vehicles?: Prisma.VehicleUncheckedCreateNestedManyWithoutOrganizationInput;
    missions?: Prisma.MissionUncheckedCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutOrganizationInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    siret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutOrganizationNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutOrganizationNestedInput;
    vehicles?: Prisma.VehicleUpdateManyWithoutOrganizationNestedInput;
    missions?: Prisma.MissionUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutOrganizationNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    siret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutOrganizationNestedInput;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutOrganizationNestedInput;
    vehicles?: Prisma.VehicleUncheckedUpdateManyWithoutOrganizationNestedInput;
    missions?: Prisma.MissionUncheckedUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateManyInput = {
    id?: string;
    name: string;
    siret?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrganizationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    siret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    siret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrganizationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    siret?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    siret?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    siret?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrganizationScalarRelationFilter = {
    is?: Prisma.OrganizationWhereInput;
    isNot?: Prisma.OrganizationWhereInput;
};
export type OrganizationNullableScalarRelationFilter = {
    is?: Prisma.OrganizationWhereInput | null;
    isNot?: Prisma.OrganizationWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutUsersInput, Prisma.OrganizationUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutUsersInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutUsersInput, Prisma.OrganizationUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.OrganizationUpsertWithoutUsersInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutUsersInput, Prisma.OrganizationUpdateWithoutUsersInput>, Prisma.OrganizationUncheckedUpdateWithoutUsersInput>;
};
export type OrganizationCreateNestedOneWithoutPatientsInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutPatientsInput, Prisma.OrganizationUncheckedCreateWithoutPatientsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutPatientsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutPatientsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutPatientsInput, Prisma.OrganizationUncheckedCreateWithoutPatientsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutPatientsInput;
    upsert?: Prisma.OrganizationUpsertWithoutPatientsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutPatientsInput, Prisma.OrganizationUpdateWithoutPatientsInput>, Prisma.OrganizationUncheckedUpdateWithoutPatientsInput>;
};
export type OrganizationCreateNestedOneWithoutVehiclesInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutVehiclesInput, Prisma.OrganizationUncheckedCreateWithoutVehiclesInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutVehiclesInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutVehiclesInput, Prisma.OrganizationUncheckedCreateWithoutVehiclesInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutVehiclesInput;
    upsert?: Prisma.OrganizationUpsertWithoutVehiclesInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutVehiclesInput, Prisma.OrganizationUpdateWithoutVehiclesInput>, Prisma.OrganizationUncheckedUpdateWithoutVehiclesInput>;
};
export type OrganizationCreateNestedOneWithoutMissionsInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutMissionsInput, Prisma.OrganizationUncheckedCreateWithoutMissionsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutMissionsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutMissionsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutMissionsInput, Prisma.OrganizationUncheckedCreateWithoutMissionsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutMissionsInput;
    upsert?: Prisma.OrganizationUpsertWithoutMissionsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutMissionsInput, Prisma.OrganizationUpdateWithoutMissionsInput>, Prisma.OrganizationUncheckedUpdateWithoutMissionsInput>;
};
export type OrganizationCreateNestedOneWithoutInvoicesInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutInvoicesInput, Prisma.OrganizationUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutInvoicesInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutInvoicesInput, Prisma.OrganizationUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutInvoicesInput;
    upsert?: Prisma.OrganizationUpsertWithoutInvoicesInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutInvoicesInput, Prisma.OrganizationUpdateWithoutInvoicesInput>, Prisma.OrganizationUncheckedUpdateWithoutInvoicesInput>;
};
export type OrganizationCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutNotificationsInput, Prisma.OrganizationUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutNotificationsInput, Prisma.OrganizationUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.OrganizationUpsertWithoutNotificationsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutNotificationsInput, Prisma.OrganizationUpdateWithoutNotificationsInput>, Prisma.OrganizationUncheckedUpdateWithoutNotificationsInput>;
};
export type OrganizationCreateNestedOneWithoutAuditLogsInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutAuditLogsInput, Prisma.OrganizationUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutAuditLogsInput;
    connect?: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateOneWithoutAuditLogsNestedInput = {
    create?: Prisma.XOR<Prisma.OrganizationCreateWithoutAuditLogsInput, Prisma.OrganizationUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.OrganizationCreateOrConnectWithoutAuditLogsInput;
    upsert?: Prisma.OrganizationUpsertWithoutAuditLogsInput;
    disconnect?: Prisma.OrganizationWhereInput | boolean;
    delete?: Prisma.OrganizationWhereInput | boolean;
    connect?: Prisma.OrganizationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrganizationUpdateToOneWithWhereWithoutAuditLogsInput, Prisma.OrganizationUpdateWithoutAuditLogsInput>, Prisma.OrganizationUncheckedUpdateWithoutAuditLogsInput>;
};
export type OrganizationCreateWithoutUsersInput = {
    id?: string;
    name: string;
    siret?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patients?: Prisma.PatientCreateNestedManyWithoutOrganizationInput;
    vehicles?: Prisma.VehicleCreateNestedManyWithoutOrganizationInput;
    missions?: Prisma.MissionCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutOrganizationInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: string;
    name: string;
    siret?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutOrganizationInput;
    vehicles?: Prisma.VehicleUncheckedCreateNestedManyWithoutOrganizationInput;
    missions?: Prisma.MissionUncheckedCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutOrganizationInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutUsersInput, Prisma.OrganizationUncheckedCreateWithoutUsersInput>;
};
export type OrganizationUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutUsersInput, Prisma.OrganizationUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutUsersInput, Prisma.OrganizationUncheckedCreateWithoutUsersInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutUsersInput, Prisma.OrganizationUncheckedUpdateWithoutUsersInput>;
};
export type OrganizationUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    siret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patients?: Prisma.PatientUpdateManyWithoutOrganizationNestedInput;
    vehicles?: Prisma.VehicleUpdateManyWithoutOrganizationNestedInput;
    missions?: Prisma.MissionUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutOrganizationNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    siret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutOrganizationNestedInput;
    vehicles?: Prisma.VehicleUncheckedUpdateManyWithoutOrganizationNestedInput;
    missions?: Prisma.MissionUncheckedUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutPatientsInput = {
    id?: string;
    name: string;
    siret?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutOrganizationInput;
    vehicles?: Prisma.VehicleCreateNestedManyWithoutOrganizationInput;
    missions?: Prisma.MissionCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutOrganizationInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutPatientsInput = {
    id?: string;
    name: string;
    siret?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutOrganizationInput;
    vehicles?: Prisma.VehicleUncheckedCreateNestedManyWithoutOrganizationInput;
    missions?: Prisma.MissionUncheckedCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutOrganizationInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutPatientsInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutPatientsInput, Prisma.OrganizationUncheckedCreateWithoutPatientsInput>;
};
export type OrganizationUpsertWithoutPatientsInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutPatientsInput, Prisma.OrganizationUncheckedUpdateWithoutPatientsInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutPatientsInput, Prisma.OrganizationUncheckedCreateWithoutPatientsInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutPatientsInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutPatientsInput, Prisma.OrganizationUncheckedUpdateWithoutPatientsInput>;
};
export type OrganizationUpdateWithoutPatientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    siret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutOrganizationNestedInput;
    vehicles?: Prisma.VehicleUpdateManyWithoutOrganizationNestedInput;
    missions?: Prisma.MissionUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutOrganizationNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutPatientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    siret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutOrganizationNestedInput;
    vehicles?: Prisma.VehicleUncheckedUpdateManyWithoutOrganizationNestedInput;
    missions?: Prisma.MissionUncheckedUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutVehiclesInput = {
    id?: string;
    name: string;
    siret?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutOrganizationInput;
    patients?: Prisma.PatientCreateNestedManyWithoutOrganizationInput;
    missions?: Prisma.MissionCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutOrganizationInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutVehiclesInput = {
    id?: string;
    name: string;
    siret?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutOrganizationInput;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutOrganizationInput;
    missions?: Prisma.MissionUncheckedCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutOrganizationInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutVehiclesInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutVehiclesInput, Prisma.OrganizationUncheckedCreateWithoutVehiclesInput>;
};
export type OrganizationUpsertWithoutVehiclesInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutVehiclesInput, Prisma.OrganizationUncheckedUpdateWithoutVehiclesInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutVehiclesInput, Prisma.OrganizationUncheckedCreateWithoutVehiclesInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutVehiclesInput, Prisma.OrganizationUncheckedUpdateWithoutVehiclesInput>;
};
export type OrganizationUpdateWithoutVehiclesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    siret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutOrganizationNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutOrganizationNestedInput;
    missions?: Prisma.MissionUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutOrganizationNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutVehiclesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    siret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutOrganizationNestedInput;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutOrganizationNestedInput;
    missions?: Prisma.MissionUncheckedUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutMissionsInput = {
    id?: string;
    name: string;
    siret?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutOrganizationInput;
    patients?: Prisma.PatientCreateNestedManyWithoutOrganizationInput;
    vehicles?: Prisma.VehicleCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutOrganizationInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutMissionsInput = {
    id?: string;
    name: string;
    siret?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutOrganizationInput;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutOrganizationInput;
    vehicles?: Prisma.VehicleUncheckedCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutOrganizationInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutMissionsInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutMissionsInput, Prisma.OrganizationUncheckedCreateWithoutMissionsInput>;
};
export type OrganizationUpsertWithoutMissionsInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutMissionsInput, Prisma.OrganizationUncheckedUpdateWithoutMissionsInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutMissionsInput, Prisma.OrganizationUncheckedCreateWithoutMissionsInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutMissionsInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutMissionsInput, Prisma.OrganizationUncheckedUpdateWithoutMissionsInput>;
};
export type OrganizationUpdateWithoutMissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    siret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutOrganizationNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutOrganizationNestedInput;
    vehicles?: Prisma.VehicleUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutOrganizationNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutMissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    siret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutOrganizationNestedInput;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutOrganizationNestedInput;
    vehicles?: Prisma.VehicleUncheckedUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutInvoicesInput = {
    id?: string;
    name: string;
    siret?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutOrganizationInput;
    patients?: Prisma.PatientCreateNestedManyWithoutOrganizationInput;
    vehicles?: Prisma.VehicleCreateNestedManyWithoutOrganizationInput;
    missions?: Prisma.MissionCreateNestedManyWithoutOrganizationInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutInvoicesInput = {
    id?: string;
    name: string;
    siret?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutOrganizationInput;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutOrganizationInput;
    vehicles?: Prisma.VehicleUncheckedCreateNestedManyWithoutOrganizationInput;
    missions?: Prisma.MissionUncheckedCreateNestedManyWithoutOrganizationInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutInvoicesInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutInvoicesInput, Prisma.OrganizationUncheckedCreateWithoutInvoicesInput>;
};
export type OrganizationUpsertWithoutInvoicesInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutInvoicesInput, Prisma.OrganizationUncheckedUpdateWithoutInvoicesInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutInvoicesInput, Prisma.OrganizationUncheckedCreateWithoutInvoicesInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutInvoicesInput, Prisma.OrganizationUncheckedUpdateWithoutInvoicesInput>;
};
export type OrganizationUpdateWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    siret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutOrganizationNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutOrganizationNestedInput;
    vehicles?: Prisma.VehicleUpdateManyWithoutOrganizationNestedInput;
    missions?: Prisma.MissionUpdateManyWithoutOrganizationNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    siret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutOrganizationNestedInput;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutOrganizationNestedInput;
    vehicles?: Prisma.VehicleUncheckedUpdateManyWithoutOrganizationNestedInput;
    missions?: Prisma.MissionUncheckedUpdateManyWithoutOrganizationNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    siret?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutOrganizationInput;
    patients?: Prisma.PatientCreateNestedManyWithoutOrganizationInput;
    vehicles?: Prisma.VehicleCreateNestedManyWithoutOrganizationInput;
    missions?: Prisma.MissionCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    siret?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutOrganizationInput;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutOrganizationInput;
    vehicles?: Prisma.VehicleUncheckedCreateNestedManyWithoutOrganizationInput;
    missions?: Prisma.MissionUncheckedCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutOrganizationInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutNotificationsInput, Prisma.OrganizationUncheckedCreateWithoutNotificationsInput>;
};
export type OrganizationUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutNotificationsInput, Prisma.OrganizationUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutNotificationsInput, Prisma.OrganizationUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutNotificationsInput, Prisma.OrganizationUncheckedUpdateWithoutNotificationsInput>;
};
export type OrganizationUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    siret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutOrganizationNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutOrganizationNestedInput;
    vehicles?: Prisma.VehicleUpdateManyWithoutOrganizationNestedInput;
    missions?: Prisma.MissionUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    siret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutOrganizationNestedInput;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutOrganizationNestedInput;
    vehicles?: Prisma.VehicleUncheckedUpdateManyWithoutOrganizationNestedInput;
    missions?: Prisma.MissionUncheckedUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCreateWithoutAuditLogsInput = {
    id?: string;
    name: string;
    siret?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutOrganizationInput;
    patients?: Prisma.PatientCreateNestedManyWithoutOrganizationInput;
    vehicles?: Prisma.VehicleCreateNestedManyWithoutOrganizationInput;
    missions?: Prisma.MissionCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceCreateNestedManyWithoutOrganizationInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationUncheckedCreateWithoutAuditLogsInput = {
    id?: string;
    name: string;
    siret?: string | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutOrganizationInput;
    patients?: Prisma.PatientUncheckedCreateNestedManyWithoutOrganizationInput;
    vehicles?: Prisma.VehicleUncheckedCreateNestedManyWithoutOrganizationInput;
    missions?: Prisma.MissionUncheckedCreateNestedManyWithoutOrganizationInput;
    invoices?: Prisma.InvoiceUncheckedCreateNestedManyWithoutOrganizationInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutOrganizationInput;
};
export type OrganizationCreateOrConnectWithoutAuditLogsInput = {
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutAuditLogsInput, Prisma.OrganizationUncheckedCreateWithoutAuditLogsInput>;
};
export type OrganizationUpsertWithoutAuditLogsInput = {
    update: Prisma.XOR<Prisma.OrganizationUpdateWithoutAuditLogsInput, Prisma.OrganizationUncheckedUpdateWithoutAuditLogsInput>;
    create: Prisma.XOR<Prisma.OrganizationCreateWithoutAuditLogsInput, Prisma.OrganizationUncheckedCreateWithoutAuditLogsInput>;
    where?: Prisma.OrganizationWhereInput;
};
export type OrganizationUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: Prisma.OrganizationWhereInput;
    data: Prisma.XOR<Prisma.OrganizationUpdateWithoutAuditLogsInput, Prisma.OrganizationUncheckedUpdateWithoutAuditLogsInput>;
};
export type OrganizationUpdateWithoutAuditLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    siret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutOrganizationNestedInput;
    patients?: Prisma.PatientUpdateManyWithoutOrganizationNestedInput;
    vehicles?: Prisma.VehicleUpdateManyWithoutOrganizationNestedInput;
    missions?: Prisma.MissionUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUpdateManyWithoutOrganizationNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationUncheckedUpdateWithoutAuditLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    siret?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutOrganizationNestedInput;
    patients?: Prisma.PatientUncheckedUpdateManyWithoutOrganizationNestedInput;
    vehicles?: Prisma.VehicleUncheckedUpdateManyWithoutOrganizationNestedInput;
    missions?: Prisma.MissionUncheckedUpdateManyWithoutOrganizationNestedInput;
    invoices?: Prisma.InvoiceUncheckedUpdateManyWithoutOrganizationNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutOrganizationNestedInput;
};
export type OrganizationCountOutputType = {
    users: number;
    patients: number;
    vehicles: number;
    missions: number;
    invoices: number;
    notifications: number;
    auditLogs: number;
};
export type OrganizationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs;
    patients?: boolean | OrganizationCountOutputTypeCountPatientsArgs;
    vehicles?: boolean | OrganizationCountOutputTypeCountVehiclesArgs;
    missions?: boolean | OrganizationCountOutputTypeCountMissionsArgs;
    invoices?: boolean | OrganizationCountOutputTypeCountInvoicesArgs;
    notifications?: boolean | OrganizationCountOutputTypeCountNotificationsArgs;
    auditLogs?: boolean | OrganizationCountOutputTypeCountAuditLogsArgs;
};
export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationCountOutputTypeSelect<ExtArgs> | null;
};
export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type OrganizationCountOutputTypeCountPatientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientWhereInput;
};
export type OrganizationCountOutputTypeCountVehiclesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VehicleWhereInput;
};
export type OrganizationCountOutputTypeCountMissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MissionWhereInput;
};
export type OrganizationCountOutputTypeCountInvoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceWhereInput;
};
export type OrganizationCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
export type OrganizationCountOutputTypeCountAuditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
};
export type OrganizationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    siret?: boolean;
    address?: boolean;
    phone?: boolean;
    email?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    users?: boolean | Prisma.Organization$usersArgs<ExtArgs>;
    patients?: boolean | Prisma.Organization$patientsArgs<ExtArgs>;
    vehicles?: boolean | Prisma.Organization$vehiclesArgs<ExtArgs>;
    missions?: boolean | Prisma.Organization$missionsArgs<ExtArgs>;
    invoices?: boolean | Prisma.Organization$invoicesArgs<ExtArgs>;
    notifications?: boolean | Prisma.Organization$notificationsArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.Organization$auditLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["organization"]>;
export type OrganizationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    siret?: boolean;
    address?: boolean;
    phone?: boolean;
    email?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["organization"]>;
export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    siret?: boolean;
    address?: boolean;
    phone?: boolean;
    email?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["organization"]>;
export type OrganizationSelectScalar = {
    id?: boolean;
    name?: boolean;
    siret?: boolean;
    address?: boolean;
    phone?: boolean;
    email?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OrganizationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "siret" | "address" | "phone" | "email" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>;
export type OrganizationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.Organization$usersArgs<ExtArgs>;
    patients?: boolean | Prisma.Organization$patientsArgs<ExtArgs>;
    vehicles?: boolean | Prisma.Organization$vehiclesArgs<ExtArgs>;
    missions?: boolean | Prisma.Organization$missionsArgs<ExtArgs>;
    invoices?: boolean | Prisma.Organization$invoicesArgs<ExtArgs>;
    notifications?: boolean | Prisma.Organization$notificationsArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.Organization$auditLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $OrganizationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Organization";
    objects: {
        users: Prisma.$UserPayload<ExtArgs>[];
        patients: Prisma.$PatientPayload<ExtArgs>[];
        vehicles: Prisma.$VehiclePayload<ExtArgs>[];
        missions: Prisma.$MissionPayload<ExtArgs>[];
        invoices: Prisma.$InvoicePayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
        auditLogs: Prisma.$AuditLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        siret: string | null;
        address: string | null;
        phone: string | null;
        email: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["organization"]>;
    composites: {};
};
export type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrganizationPayload, S>;
export type OrganizationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrganizationCountAggregateInputType | true;
};
export interface OrganizationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Organization'];
        meta: {
            name: 'Organization';
        };
    };
    findUnique<T extends OrganizationFindUniqueArgs>(args: Prisma.SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrganizationFindFirstArgs>(args?: Prisma.SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrganizationFindManyArgs>(args?: Prisma.SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrganizationCreateArgs>(args: Prisma.SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrganizationCreateManyArgs>(args?: Prisma.SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrganizationDeleteArgs>(args: Prisma.SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrganizationUpdateArgs>(args: Prisma.SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrganizationUpdateManyArgs>(args: Prisma.SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrganizationUpsertArgs>(args: Prisma.SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrganizationCountArgs>(args?: Prisma.Subset<T, OrganizationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrganizationCountAggregateOutputType> : number>;
    aggregate<T extends OrganizationAggregateArgs>(args: Prisma.Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;
    groupBy<T extends OrganizationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrganizationGroupByArgs['orderBy'];
    } : {
        orderBy?: OrganizationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrganizationFieldRefs;
}
export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.Organization$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    patients<T extends Prisma.Organization$patientsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    vehicles<T extends Prisma.Organization$vehiclesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    missions<T extends Prisma.Organization$missionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    invoices<T extends Prisma.Organization$invoicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.Organization$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    auditLogs<T extends Prisma.Organization$auditLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Organization$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrganizationFieldRefs {
    readonly id: Prisma.FieldRef<"Organization", 'String'>;
    readonly name: Prisma.FieldRef<"Organization", 'String'>;
    readonly siret: Prisma.FieldRef<"Organization", 'String'>;
    readonly address: Prisma.FieldRef<"Organization", 'String'>;
    readonly phone: Prisma.FieldRef<"Organization", 'String'>;
    readonly email: Prisma.FieldRef<"Organization", 'String'>;
    readonly isActive: Prisma.FieldRef<"Organization", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Organization", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Organization", 'DateTime'>;
}
export type OrganizationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationScalarFieldEnum | Prisma.OrganizationScalarFieldEnum[];
};
export type OrganizationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationScalarFieldEnum | Prisma.OrganizationScalarFieldEnum[];
};
export type OrganizationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where?: Prisma.OrganizationWhereInput;
    orderBy?: Prisma.OrganizationOrderByWithRelationInput | Prisma.OrganizationOrderByWithRelationInput[];
    cursor?: Prisma.OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrganizationScalarFieldEnum | Prisma.OrganizationScalarFieldEnum[];
};
export type OrganizationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationCreateInput, Prisma.OrganizationUncheckedCreateInput>;
};
export type OrganizationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrganizationCreateManyInput | Prisma.OrganizationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrganizationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    data: Prisma.OrganizationCreateManyInput | Prisma.OrganizationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrganizationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationUpdateInput, Prisma.OrganizationUncheckedUpdateInput>;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrganizationUpdateManyMutationInput, Prisma.OrganizationUncheckedUpdateManyInput>;
    where?: Prisma.OrganizationWhereInput;
    limit?: number;
};
export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrganizationUpdateManyMutationInput, Prisma.OrganizationUncheckedUpdateManyInput>;
    where?: Prisma.OrganizationWhereInput;
    limit?: number;
};
export type OrganizationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrganizationCreateInput, Prisma.OrganizationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrganizationUpdateInput, Prisma.OrganizationUncheckedUpdateInput>;
};
export type OrganizationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
    where: Prisma.OrganizationWhereUniqueInput;
};
export type OrganizationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrganizationWhereInput;
    limit?: number;
};
export type Organization$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type Organization$patientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Organization$vehiclesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Organization$missionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Organization$invoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Organization$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
export type Organization$auditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where?: Prisma.AuditLogWhereInput;
    orderBy?: Prisma.AuditLogOrderByWithRelationInput | Prisma.AuditLogOrderByWithRelationInput[];
    cursor?: Prisma.AuditLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditLogScalarFieldEnum | Prisma.AuditLogScalarFieldEnum[];
};
export type OrganizationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrganizationSelect<ExtArgs> | null;
    omit?: Prisma.OrganizationOmit<ExtArgs> | null;
    include?: Prisma.OrganizationInclude<ExtArgs> | null;
};
