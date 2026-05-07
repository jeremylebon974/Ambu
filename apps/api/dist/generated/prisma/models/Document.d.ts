import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type DocumentModel = runtime.Types.Result.DefaultSelection<Prisma.$DocumentPayload>;
export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null;
    _avg: DocumentAvgAggregateOutputType | null;
    _sum: DocumentSumAggregateOutputType | null;
    _min: DocumentMinAggregateOutputType | null;
    _max: DocumentMaxAggregateOutputType | null;
};
export type DocumentAvgAggregateOutputType = {
    sizeBytes: number | null;
};
export type DocumentSumAggregateOutputType = {
    sizeBytes: number | null;
};
export type DocumentMinAggregateOutputType = {
    id: string | null;
    filename: string | null;
    url: string | null;
    mimeType: string | null;
    sizeBytes: number | null;
    type: $Enums.DocumentType | null;
    isEncrypted: boolean | null;
    patientId: string | null;
    missionId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DocumentMaxAggregateOutputType = {
    id: string | null;
    filename: string | null;
    url: string | null;
    mimeType: string | null;
    sizeBytes: number | null;
    type: $Enums.DocumentType | null;
    isEncrypted: boolean | null;
    patientId: string | null;
    missionId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DocumentCountAggregateOutputType = {
    id: number;
    filename: number;
    url: number;
    mimeType: number;
    sizeBytes: number;
    type: number;
    isEncrypted: number;
    patientId: number;
    missionId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DocumentAvgAggregateInputType = {
    sizeBytes?: true;
};
export type DocumentSumAggregateInputType = {
    sizeBytes?: true;
};
export type DocumentMinAggregateInputType = {
    id?: true;
    filename?: true;
    url?: true;
    mimeType?: true;
    sizeBytes?: true;
    type?: true;
    isEncrypted?: true;
    patientId?: true;
    missionId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DocumentMaxAggregateInputType = {
    id?: true;
    filename?: true;
    url?: true;
    mimeType?: true;
    sizeBytes?: true;
    type?: true;
    isEncrypted?: true;
    patientId?: true;
    missionId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DocumentCountAggregateInputType = {
    id?: true;
    filename?: true;
    url?: true;
    mimeType?: true;
    sizeBytes?: true;
    type?: true;
    isEncrypted?: true;
    patientId?: true;
    missionId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DocumentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DocumentCountAggregateInputType;
    _avg?: DocumentAvgAggregateInputType;
    _sum?: DocumentSumAggregateInputType;
    _min?: DocumentMinAggregateInputType;
    _max?: DocumentMaxAggregateInputType;
};
export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
    [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDocument[P]> : Prisma.GetScalarType<T[P], AggregateDocument[P]>;
};
export type DocumentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithAggregationInput | Prisma.DocumentOrderByWithAggregationInput[];
    by: Prisma.DocumentScalarFieldEnum[] | Prisma.DocumentScalarFieldEnum;
    having?: Prisma.DocumentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DocumentCountAggregateInputType | true;
    _avg?: DocumentAvgAggregateInputType;
    _sum?: DocumentSumAggregateInputType;
    _min?: DocumentMinAggregateInputType;
    _max?: DocumentMaxAggregateInputType;
};
export type DocumentGroupByOutputType = {
    id: string;
    filename: string;
    url: string;
    mimeType: string | null;
    sizeBytes: number | null;
    type: $Enums.DocumentType;
    isEncrypted: boolean;
    patientId: string | null;
    missionId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: DocumentCountAggregateOutputType | null;
    _avg: DocumentAvgAggregateOutputType | null;
    _sum: DocumentSumAggregateOutputType | null;
    _min: DocumentMinAggregateOutputType | null;
    _max: DocumentMaxAggregateOutputType | null;
};
export type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DocumentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DocumentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DocumentGroupByOutputType[P]>;
}>>;
export type DocumentWhereInput = {
    AND?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    OR?: Prisma.DocumentWhereInput[];
    NOT?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    id?: Prisma.StringFilter<"Document"> | string;
    filename?: Prisma.StringFilter<"Document"> | string;
    url?: Prisma.StringFilter<"Document"> | string;
    mimeType?: Prisma.StringNullableFilter<"Document"> | string | null;
    sizeBytes?: Prisma.IntNullableFilter<"Document"> | number | null;
    type?: Prisma.EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType;
    isEncrypted?: Prisma.BoolFilter<"Document"> | boolean;
    patientId?: Prisma.StringNullableFilter<"Document"> | string | null;
    missionId?: Prisma.StringNullableFilter<"Document"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
    patient?: Prisma.XOR<Prisma.PatientNullableScalarRelationFilter, Prisma.PatientWhereInput> | null;
    mission?: Prisma.XOR<Prisma.MissionNullableScalarRelationFilter, Prisma.MissionWhereInput> | null;
};
export type DocumentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrderInput | Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    isEncrypted?: Prisma.SortOrder;
    patientId?: Prisma.SortOrderInput | Prisma.SortOrder;
    missionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    patient?: Prisma.PatientOrderByWithRelationInput;
    mission?: Prisma.MissionOrderByWithRelationInput;
};
export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    OR?: Prisma.DocumentWhereInput[];
    NOT?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    filename?: Prisma.StringFilter<"Document"> | string;
    url?: Prisma.StringFilter<"Document"> | string;
    mimeType?: Prisma.StringNullableFilter<"Document"> | string | null;
    sizeBytes?: Prisma.IntNullableFilter<"Document"> | number | null;
    type?: Prisma.EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType;
    isEncrypted?: Prisma.BoolFilter<"Document"> | boolean;
    patientId?: Prisma.StringNullableFilter<"Document"> | string | null;
    missionId?: Prisma.StringNullableFilter<"Document"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
    patient?: Prisma.XOR<Prisma.PatientNullableScalarRelationFilter, Prisma.PatientWhereInput> | null;
    mission?: Prisma.XOR<Prisma.MissionNullableScalarRelationFilter, Prisma.MissionWhereInput> | null;
}, "id">;
export type DocumentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrderInput | Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    isEncrypted?: Prisma.SortOrder;
    patientId?: Prisma.SortOrderInput | Prisma.SortOrder;
    missionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DocumentCountOrderByAggregateInput;
    _avg?: Prisma.DocumentAvgOrderByAggregateInput;
    _max?: Prisma.DocumentMaxOrderByAggregateInput;
    _min?: Prisma.DocumentMinOrderByAggregateInput;
    _sum?: Prisma.DocumentSumOrderByAggregateInput;
};
export type DocumentScalarWhereWithAggregatesInput = {
    AND?: Prisma.DocumentScalarWhereWithAggregatesInput | Prisma.DocumentScalarWhereWithAggregatesInput[];
    OR?: Prisma.DocumentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DocumentScalarWhereWithAggregatesInput | Prisma.DocumentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    filename?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    url?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    mimeType?: Prisma.StringNullableWithAggregatesFilter<"Document"> | string | null;
    sizeBytes?: Prisma.IntNullableWithAggregatesFilter<"Document"> | number | null;
    type?: Prisma.EnumDocumentTypeWithAggregatesFilter<"Document"> | $Enums.DocumentType;
    isEncrypted?: Prisma.BoolWithAggregatesFilter<"Document"> | boolean;
    patientId?: Prisma.StringNullableWithAggregatesFilter<"Document"> | string | null;
    missionId?: Prisma.StringNullableWithAggregatesFilter<"Document"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Document"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Document"> | Date | string;
};
export type DocumentCreateInput = {
    id?: string;
    filename: string;
    url: string;
    mimeType?: string | null;
    sizeBytes?: number | null;
    type?: $Enums.DocumentType;
    isEncrypted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patient?: Prisma.PatientCreateNestedOneWithoutDocumentsInput;
    mission?: Prisma.MissionCreateNestedOneWithoutDocumentsInput;
};
export type DocumentUncheckedCreateInput = {
    id?: string;
    filename: string;
    url: string;
    mimeType?: string | null;
    sizeBytes?: number | null;
    type?: $Enums.DocumentType;
    isEncrypted?: boolean;
    patientId?: string | null;
    missionId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DocumentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sizeBytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    type?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    isEncrypted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.PatientUpdateOneWithoutDocumentsNestedInput;
    mission?: Prisma.MissionUpdateOneWithoutDocumentsNestedInput;
};
export type DocumentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sizeBytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    type?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    isEncrypted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    missionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentCreateManyInput = {
    id?: string;
    filename: string;
    url: string;
    mimeType?: string | null;
    sizeBytes?: number | null;
    type?: $Enums.DocumentType;
    isEncrypted?: boolean;
    patientId?: string | null;
    missionId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DocumentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sizeBytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    type?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    isEncrypted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sizeBytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    type?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    isEncrypted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    missionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentListRelationFilter = {
    every?: Prisma.DocumentWhereInput;
    some?: Prisma.DocumentWhereInput;
    none?: Prisma.DocumentWhereInput;
};
export type DocumentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DocumentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    isEncrypted?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DocumentAvgOrderByAggregateInput = {
    sizeBytes?: Prisma.SortOrder;
};
export type DocumentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    isEncrypted?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DocumentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    isEncrypted?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DocumentSumOrderByAggregateInput = {
    sizeBytes?: Prisma.SortOrder;
};
export type DocumentCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutPatientInput, Prisma.DocumentUncheckedCreateWithoutPatientInput> | Prisma.DocumentCreateWithoutPatientInput[] | Prisma.DocumentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutPatientInput | Prisma.DocumentCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.DocumentCreateManyPatientInputEnvelope;
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
};
export type DocumentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutPatientInput, Prisma.DocumentUncheckedCreateWithoutPatientInput> | Prisma.DocumentCreateWithoutPatientInput[] | Prisma.DocumentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutPatientInput | Prisma.DocumentCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.DocumentCreateManyPatientInputEnvelope;
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
};
export type DocumentUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutPatientInput, Prisma.DocumentUncheckedCreateWithoutPatientInput> | Prisma.DocumentCreateWithoutPatientInput[] | Prisma.DocumentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutPatientInput | Prisma.DocumentCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.DocumentUpsertWithWhereUniqueWithoutPatientInput | Prisma.DocumentUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.DocumentCreateManyPatientInputEnvelope;
    set?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    disconnect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    delete?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    update?: Prisma.DocumentUpdateWithWhereUniqueWithoutPatientInput | Prisma.DocumentUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.DocumentUpdateManyWithWhereWithoutPatientInput | Prisma.DocumentUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
};
export type DocumentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutPatientInput, Prisma.DocumentUncheckedCreateWithoutPatientInput> | Prisma.DocumentCreateWithoutPatientInput[] | Prisma.DocumentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutPatientInput | Prisma.DocumentCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.DocumentUpsertWithWhereUniqueWithoutPatientInput | Prisma.DocumentUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.DocumentCreateManyPatientInputEnvelope;
    set?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    disconnect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    delete?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    update?: Prisma.DocumentUpdateWithWhereUniqueWithoutPatientInput | Prisma.DocumentUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.DocumentUpdateManyWithWhereWithoutPatientInput | Prisma.DocumentUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
};
export type DocumentCreateNestedManyWithoutMissionInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutMissionInput, Prisma.DocumentUncheckedCreateWithoutMissionInput> | Prisma.DocumentCreateWithoutMissionInput[] | Prisma.DocumentUncheckedCreateWithoutMissionInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutMissionInput | Prisma.DocumentCreateOrConnectWithoutMissionInput[];
    createMany?: Prisma.DocumentCreateManyMissionInputEnvelope;
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
};
export type DocumentUncheckedCreateNestedManyWithoutMissionInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutMissionInput, Prisma.DocumentUncheckedCreateWithoutMissionInput> | Prisma.DocumentCreateWithoutMissionInput[] | Prisma.DocumentUncheckedCreateWithoutMissionInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutMissionInput | Prisma.DocumentCreateOrConnectWithoutMissionInput[];
    createMany?: Prisma.DocumentCreateManyMissionInputEnvelope;
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
};
export type DocumentUpdateManyWithoutMissionNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutMissionInput, Prisma.DocumentUncheckedCreateWithoutMissionInput> | Prisma.DocumentCreateWithoutMissionInput[] | Prisma.DocumentUncheckedCreateWithoutMissionInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutMissionInput | Prisma.DocumentCreateOrConnectWithoutMissionInput[];
    upsert?: Prisma.DocumentUpsertWithWhereUniqueWithoutMissionInput | Prisma.DocumentUpsertWithWhereUniqueWithoutMissionInput[];
    createMany?: Prisma.DocumentCreateManyMissionInputEnvelope;
    set?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    disconnect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    delete?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    update?: Prisma.DocumentUpdateWithWhereUniqueWithoutMissionInput | Prisma.DocumentUpdateWithWhereUniqueWithoutMissionInput[];
    updateMany?: Prisma.DocumentUpdateManyWithWhereWithoutMissionInput | Prisma.DocumentUpdateManyWithWhereWithoutMissionInput[];
    deleteMany?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
};
export type DocumentUncheckedUpdateManyWithoutMissionNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutMissionInput, Prisma.DocumentUncheckedCreateWithoutMissionInput> | Prisma.DocumentCreateWithoutMissionInput[] | Prisma.DocumentUncheckedCreateWithoutMissionInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutMissionInput | Prisma.DocumentCreateOrConnectWithoutMissionInput[];
    upsert?: Prisma.DocumentUpsertWithWhereUniqueWithoutMissionInput | Prisma.DocumentUpsertWithWhereUniqueWithoutMissionInput[];
    createMany?: Prisma.DocumentCreateManyMissionInputEnvelope;
    set?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    disconnect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    delete?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    update?: Prisma.DocumentUpdateWithWhereUniqueWithoutMissionInput | Prisma.DocumentUpdateWithWhereUniqueWithoutMissionInput[];
    updateMany?: Prisma.DocumentUpdateManyWithWhereWithoutMissionInput | Prisma.DocumentUpdateManyWithWhereWithoutMissionInput[];
    deleteMany?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumDocumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentType;
};
export type DocumentCreateWithoutPatientInput = {
    id?: string;
    filename: string;
    url: string;
    mimeType?: string | null;
    sizeBytes?: number | null;
    type?: $Enums.DocumentType;
    isEncrypted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mission?: Prisma.MissionCreateNestedOneWithoutDocumentsInput;
};
export type DocumentUncheckedCreateWithoutPatientInput = {
    id?: string;
    filename: string;
    url: string;
    mimeType?: string | null;
    sizeBytes?: number | null;
    type?: $Enums.DocumentType;
    isEncrypted?: boolean;
    missionId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DocumentCreateOrConnectWithoutPatientInput = {
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutPatientInput, Prisma.DocumentUncheckedCreateWithoutPatientInput>;
};
export type DocumentCreateManyPatientInputEnvelope = {
    data: Prisma.DocumentCreateManyPatientInput | Prisma.DocumentCreateManyPatientInput[];
    skipDuplicates?: boolean;
};
export type DocumentUpsertWithWhereUniqueWithoutPatientInput = {
    where: Prisma.DocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.DocumentUpdateWithoutPatientInput, Prisma.DocumentUncheckedUpdateWithoutPatientInput>;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutPatientInput, Prisma.DocumentUncheckedCreateWithoutPatientInput>;
};
export type DocumentUpdateWithWhereUniqueWithoutPatientInput = {
    where: Prisma.DocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.DocumentUpdateWithoutPatientInput, Prisma.DocumentUncheckedUpdateWithoutPatientInput>;
};
export type DocumentUpdateManyWithWhereWithoutPatientInput = {
    where: Prisma.DocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.DocumentUpdateManyMutationInput, Prisma.DocumentUncheckedUpdateManyWithoutPatientInput>;
};
export type DocumentScalarWhereInput = {
    AND?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
    OR?: Prisma.DocumentScalarWhereInput[];
    NOT?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
    id?: Prisma.StringFilter<"Document"> | string;
    filename?: Prisma.StringFilter<"Document"> | string;
    url?: Prisma.StringFilter<"Document"> | string;
    mimeType?: Prisma.StringNullableFilter<"Document"> | string | null;
    sizeBytes?: Prisma.IntNullableFilter<"Document"> | number | null;
    type?: Prisma.EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType;
    isEncrypted?: Prisma.BoolFilter<"Document"> | boolean;
    patientId?: Prisma.StringNullableFilter<"Document"> | string | null;
    missionId?: Prisma.StringNullableFilter<"Document"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
};
export type DocumentCreateWithoutMissionInput = {
    id?: string;
    filename: string;
    url: string;
    mimeType?: string | null;
    sizeBytes?: number | null;
    type?: $Enums.DocumentType;
    isEncrypted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patient?: Prisma.PatientCreateNestedOneWithoutDocumentsInput;
};
export type DocumentUncheckedCreateWithoutMissionInput = {
    id?: string;
    filename: string;
    url: string;
    mimeType?: string | null;
    sizeBytes?: number | null;
    type?: $Enums.DocumentType;
    isEncrypted?: boolean;
    patientId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DocumentCreateOrConnectWithoutMissionInput = {
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutMissionInput, Prisma.DocumentUncheckedCreateWithoutMissionInput>;
};
export type DocumentCreateManyMissionInputEnvelope = {
    data: Prisma.DocumentCreateManyMissionInput | Prisma.DocumentCreateManyMissionInput[];
    skipDuplicates?: boolean;
};
export type DocumentUpsertWithWhereUniqueWithoutMissionInput = {
    where: Prisma.DocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.DocumentUpdateWithoutMissionInput, Prisma.DocumentUncheckedUpdateWithoutMissionInput>;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutMissionInput, Prisma.DocumentUncheckedCreateWithoutMissionInput>;
};
export type DocumentUpdateWithWhereUniqueWithoutMissionInput = {
    where: Prisma.DocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.DocumentUpdateWithoutMissionInput, Prisma.DocumentUncheckedUpdateWithoutMissionInput>;
};
export type DocumentUpdateManyWithWhereWithoutMissionInput = {
    where: Prisma.DocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.DocumentUpdateManyMutationInput, Prisma.DocumentUncheckedUpdateManyWithoutMissionInput>;
};
export type DocumentCreateManyPatientInput = {
    id?: string;
    filename: string;
    url: string;
    mimeType?: string | null;
    sizeBytes?: number | null;
    type?: $Enums.DocumentType;
    isEncrypted?: boolean;
    missionId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DocumentUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sizeBytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    type?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    isEncrypted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mission?: Prisma.MissionUpdateOneWithoutDocumentsNestedInput;
};
export type DocumentUncheckedUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sizeBytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    type?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    isEncrypted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    missionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentUncheckedUpdateManyWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sizeBytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    type?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    isEncrypted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    missionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentCreateManyMissionInput = {
    id?: string;
    filename: string;
    url: string;
    mimeType?: string | null;
    sizeBytes?: number | null;
    type?: $Enums.DocumentType;
    isEncrypted?: boolean;
    patientId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DocumentUpdateWithoutMissionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sizeBytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    type?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    isEncrypted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.PatientUpdateOneWithoutDocumentsNestedInput;
};
export type DocumentUncheckedUpdateWithoutMissionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sizeBytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    type?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    isEncrypted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentUncheckedUpdateManyWithoutMissionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sizeBytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    type?: Prisma.EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType;
    isEncrypted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    patientId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    filename?: boolean;
    url?: boolean;
    mimeType?: boolean;
    sizeBytes?: boolean;
    type?: boolean;
    isEncrypted?: boolean;
    patientId?: boolean;
    missionId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    patient?: boolean | Prisma.Document$patientArgs<ExtArgs>;
    mission?: boolean | Prisma.Document$missionArgs<ExtArgs>;
}, ExtArgs["result"]["document"]>;
export type DocumentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    filename?: boolean;
    url?: boolean;
    mimeType?: boolean;
    sizeBytes?: boolean;
    type?: boolean;
    isEncrypted?: boolean;
    patientId?: boolean;
    missionId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    patient?: boolean | Prisma.Document$patientArgs<ExtArgs>;
    mission?: boolean | Prisma.Document$missionArgs<ExtArgs>;
}, ExtArgs["result"]["document"]>;
export type DocumentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    filename?: boolean;
    url?: boolean;
    mimeType?: boolean;
    sizeBytes?: boolean;
    type?: boolean;
    isEncrypted?: boolean;
    patientId?: boolean;
    missionId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    patient?: boolean | Prisma.Document$patientArgs<ExtArgs>;
    mission?: boolean | Prisma.Document$missionArgs<ExtArgs>;
}, ExtArgs["result"]["document"]>;
export type DocumentSelectScalar = {
    id?: boolean;
    filename?: boolean;
    url?: boolean;
    mimeType?: boolean;
    sizeBytes?: boolean;
    type?: boolean;
    isEncrypted?: boolean;
    patientId?: boolean;
    missionId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DocumentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "filename" | "url" | "mimeType" | "sizeBytes" | "type" | "isEncrypted" | "patientId" | "missionId" | "createdAt" | "updatedAt", ExtArgs["result"]["document"]>;
export type DocumentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.Document$patientArgs<ExtArgs>;
    mission?: boolean | Prisma.Document$missionArgs<ExtArgs>;
};
export type DocumentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.Document$patientArgs<ExtArgs>;
    mission?: boolean | Prisma.Document$missionArgs<ExtArgs>;
};
export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.Document$patientArgs<ExtArgs>;
    mission?: boolean | Prisma.Document$missionArgs<ExtArgs>;
};
export type $DocumentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Document";
    objects: {
        patient: Prisma.$PatientPayload<ExtArgs> | null;
        mission: Prisma.$MissionPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        filename: string;
        url: string;
        mimeType: string | null;
        sizeBytes: number | null;
        type: $Enums.DocumentType;
        isEncrypted: boolean;
        patientId: string | null;
        missionId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["document"]>;
    composites: {};
};
export type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DocumentPayload, S>;
export type DocumentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DocumentCountAggregateInputType | true;
};
export interface DocumentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Document'];
        meta: {
            name: 'Document';
        };
    };
    findUnique<T extends DocumentFindUniqueArgs>(args: Prisma.SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DocumentFindFirstArgs>(args?: Prisma.SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DocumentFindManyArgs>(args?: Prisma.SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DocumentCreateArgs>(args: Prisma.SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DocumentCreateManyArgs>(args?: Prisma.SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DocumentDeleteArgs>(args: Prisma.SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DocumentUpdateArgs>(args: Prisma.SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DocumentDeleteManyArgs>(args?: Prisma.SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DocumentUpdateManyArgs>(args: Prisma.SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DocumentUpsertArgs>(args: Prisma.SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DocumentCountArgs>(args?: Prisma.Subset<T, DocumentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DocumentCountAggregateOutputType> : number>;
    aggregate<T extends DocumentAggregateArgs>(args: Prisma.Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>;
    groupBy<T extends DocumentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DocumentGroupByArgs['orderBy'];
    } : {
        orderBy?: DocumentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DocumentFieldRefs;
}
export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    patient<T extends Prisma.Document$patientArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Document$patientArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    mission<T extends Prisma.Document$missionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Document$missionArgs<ExtArgs>>): Prisma.Prisma__MissionClient<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DocumentFieldRefs {
    readonly id: Prisma.FieldRef<"Document", 'String'>;
    readonly filename: Prisma.FieldRef<"Document", 'String'>;
    readonly url: Prisma.FieldRef<"Document", 'String'>;
    readonly mimeType: Prisma.FieldRef<"Document", 'String'>;
    readonly sizeBytes: Prisma.FieldRef<"Document", 'Int'>;
    readonly type: Prisma.FieldRef<"Document", 'DocumentType'>;
    readonly isEncrypted: Prisma.FieldRef<"Document", 'Boolean'>;
    readonly patientId: Prisma.FieldRef<"Document", 'String'>;
    readonly missionId: Prisma.FieldRef<"Document", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Document", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Document", 'DateTime'>;
}
export type DocumentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DocumentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DocumentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DocumentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentCreateInput, Prisma.DocumentUncheckedCreateInput>;
};
export type DocumentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DocumentCreateManyInput | Prisma.DocumentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DocumentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    data: Prisma.DocumentCreateManyInput | Prisma.DocumentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DocumentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DocumentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentUpdateInput, Prisma.DocumentUncheckedUpdateInput>;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DocumentUpdateManyMutationInput, Prisma.DocumentUncheckedUpdateManyInput>;
    where?: Prisma.DocumentWhereInput;
    limit?: number;
};
export type DocumentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentUpdateManyMutationInput, Prisma.DocumentUncheckedUpdateManyInput>;
    where?: Prisma.DocumentWhereInput;
    limit?: number;
    include?: Prisma.DocumentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DocumentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateInput, Prisma.DocumentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DocumentUpdateInput, Prisma.DocumentUncheckedUpdateInput>;
};
export type DocumentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
    limit?: number;
};
export type Document$patientArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSelect<ExtArgs> | null;
    omit?: Prisma.PatientOmit<ExtArgs> | null;
    include?: Prisma.PatientInclude<ExtArgs> | null;
    where?: Prisma.PatientWhereInput;
};
export type Document$missionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
    where?: Prisma.MissionWhereInput;
};
export type DocumentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
};
