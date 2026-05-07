import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type MutuelleModel = runtime.Types.Result.DefaultSelection<Prisma.$MutuellePayload>;
export type AggregateMutuelle = {
    _count: MutuelleCountAggregateOutputType | null;
    _min: MutuelleMinAggregateOutputType | null;
    _max: MutuelleMaxAggregateOutputType | null;
};
export type MutuelleMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    number: string | null;
    startDate: Date | null;
    endDate: Date | null;
    isActive: boolean | null;
    patientId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MutuelleMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    number: string | null;
    startDate: Date | null;
    endDate: Date | null;
    isActive: boolean | null;
    patientId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MutuelleCountAggregateOutputType = {
    id: number;
    name: number;
    number: number;
    startDate: number;
    endDate: number;
    isActive: number;
    patientId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MutuelleMinAggregateInputType = {
    id?: true;
    name?: true;
    number?: true;
    startDate?: true;
    endDate?: true;
    isActive?: true;
    patientId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MutuelleMaxAggregateInputType = {
    id?: true;
    name?: true;
    number?: true;
    startDate?: true;
    endDate?: true;
    isActive?: true;
    patientId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MutuelleCountAggregateInputType = {
    id?: true;
    name?: true;
    number?: true;
    startDate?: true;
    endDate?: true;
    isActive?: true;
    patientId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MutuelleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MutuelleWhereInput;
    orderBy?: Prisma.MutuelleOrderByWithRelationInput | Prisma.MutuelleOrderByWithRelationInput[];
    cursor?: Prisma.MutuelleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MutuelleCountAggregateInputType;
    _min?: MutuelleMinAggregateInputType;
    _max?: MutuelleMaxAggregateInputType;
};
export type GetMutuelleAggregateType<T extends MutuelleAggregateArgs> = {
    [P in keyof T & keyof AggregateMutuelle]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMutuelle[P]> : Prisma.GetScalarType<T[P], AggregateMutuelle[P]>;
};
export type MutuelleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MutuelleWhereInput;
    orderBy?: Prisma.MutuelleOrderByWithAggregationInput | Prisma.MutuelleOrderByWithAggregationInput[];
    by: Prisma.MutuelleScalarFieldEnum[] | Prisma.MutuelleScalarFieldEnum;
    having?: Prisma.MutuelleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MutuelleCountAggregateInputType | true;
    _min?: MutuelleMinAggregateInputType;
    _max?: MutuelleMaxAggregateInputType;
};
export type MutuelleGroupByOutputType = {
    id: string;
    name: string;
    number: string | null;
    startDate: Date | null;
    endDate: Date | null;
    isActive: boolean;
    patientId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MutuelleCountAggregateOutputType | null;
    _min: MutuelleMinAggregateOutputType | null;
    _max: MutuelleMaxAggregateOutputType | null;
};
export type GetMutuelleGroupByPayload<T extends MutuelleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MutuelleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MutuelleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MutuelleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MutuelleGroupByOutputType[P]>;
}>>;
export type MutuelleWhereInput = {
    AND?: Prisma.MutuelleWhereInput | Prisma.MutuelleWhereInput[];
    OR?: Prisma.MutuelleWhereInput[];
    NOT?: Prisma.MutuelleWhereInput | Prisma.MutuelleWhereInput[];
    id?: Prisma.StringFilter<"Mutuelle"> | string;
    name?: Prisma.StringFilter<"Mutuelle"> | string;
    number?: Prisma.StringNullableFilter<"Mutuelle"> | string | null;
    startDate?: Prisma.DateTimeNullableFilter<"Mutuelle"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableFilter<"Mutuelle"> | Date | string | null;
    isActive?: Prisma.BoolFilter<"Mutuelle"> | boolean;
    patientId?: Prisma.StringFilter<"Mutuelle"> | string;
    createdAt?: Prisma.DateTimeFilter<"Mutuelle"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Mutuelle"> | Date | string;
    patient?: Prisma.XOR<Prisma.PatientScalarRelationFilter, Prisma.PatientWhereInput>;
};
export type MutuelleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    number?: Prisma.SortOrderInput | Prisma.SortOrder;
    startDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    patient?: Prisma.PatientOrderByWithRelationInput;
};
export type MutuelleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MutuelleWhereInput | Prisma.MutuelleWhereInput[];
    OR?: Prisma.MutuelleWhereInput[];
    NOT?: Prisma.MutuelleWhereInput | Prisma.MutuelleWhereInput[];
    name?: Prisma.StringFilter<"Mutuelle"> | string;
    number?: Prisma.StringNullableFilter<"Mutuelle"> | string | null;
    startDate?: Prisma.DateTimeNullableFilter<"Mutuelle"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableFilter<"Mutuelle"> | Date | string | null;
    isActive?: Prisma.BoolFilter<"Mutuelle"> | boolean;
    patientId?: Prisma.StringFilter<"Mutuelle"> | string;
    createdAt?: Prisma.DateTimeFilter<"Mutuelle"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Mutuelle"> | Date | string;
    patient?: Prisma.XOR<Prisma.PatientScalarRelationFilter, Prisma.PatientWhereInput>;
}, "id">;
export type MutuelleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    number?: Prisma.SortOrderInput | Prisma.SortOrder;
    startDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MutuelleCountOrderByAggregateInput;
    _max?: Prisma.MutuelleMaxOrderByAggregateInput;
    _min?: Prisma.MutuelleMinOrderByAggregateInput;
};
export type MutuelleScalarWhereWithAggregatesInput = {
    AND?: Prisma.MutuelleScalarWhereWithAggregatesInput | Prisma.MutuelleScalarWhereWithAggregatesInput[];
    OR?: Prisma.MutuelleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MutuelleScalarWhereWithAggregatesInput | Prisma.MutuelleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Mutuelle"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Mutuelle"> | string;
    number?: Prisma.StringNullableWithAggregatesFilter<"Mutuelle"> | string | null;
    startDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Mutuelle"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Mutuelle"> | Date | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Mutuelle"> | boolean;
    patientId?: Prisma.StringWithAggregatesFilter<"Mutuelle"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Mutuelle"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Mutuelle"> | Date | string;
};
export type MutuelleCreateInput = {
    id?: string;
    name: string;
    number?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patient: Prisma.PatientCreateNestedOneWithoutMutuellesInput;
};
export type MutuelleUncheckedCreateInput = {
    id?: string;
    name: string;
    number?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isActive?: boolean;
    patientId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MutuelleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.PatientUpdateOneRequiredWithoutMutuellesNestedInput;
};
export type MutuelleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MutuelleCreateManyInput = {
    id?: string;
    name: string;
    number?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isActive?: boolean;
    patientId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MutuelleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MutuelleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MutuelleListRelationFilter = {
    every?: Prisma.MutuelleWhereInput;
    some?: Prisma.MutuelleWhereInput;
    none?: Prisma.MutuelleWhereInput;
};
export type MutuelleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MutuelleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MutuelleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MutuelleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MutuelleCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.MutuelleCreateWithoutPatientInput, Prisma.MutuelleUncheckedCreateWithoutPatientInput> | Prisma.MutuelleCreateWithoutPatientInput[] | Prisma.MutuelleUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.MutuelleCreateOrConnectWithoutPatientInput | Prisma.MutuelleCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.MutuelleCreateManyPatientInputEnvelope;
    connect?: Prisma.MutuelleWhereUniqueInput | Prisma.MutuelleWhereUniqueInput[];
};
export type MutuelleUncheckedCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.MutuelleCreateWithoutPatientInput, Prisma.MutuelleUncheckedCreateWithoutPatientInput> | Prisma.MutuelleCreateWithoutPatientInput[] | Prisma.MutuelleUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.MutuelleCreateOrConnectWithoutPatientInput | Prisma.MutuelleCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.MutuelleCreateManyPatientInputEnvelope;
    connect?: Prisma.MutuelleWhereUniqueInput | Prisma.MutuelleWhereUniqueInput[];
};
export type MutuelleUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.MutuelleCreateWithoutPatientInput, Prisma.MutuelleUncheckedCreateWithoutPatientInput> | Prisma.MutuelleCreateWithoutPatientInput[] | Prisma.MutuelleUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.MutuelleCreateOrConnectWithoutPatientInput | Prisma.MutuelleCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.MutuelleUpsertWithWhereUniqueWithoutPatientInput | Prisma.MutuelleUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.MutuelleCreateManyPatientInputEnvelope;
    set?: Prisma.MutuelleWhereUniqueInput | Prisma.MutuelleWhereUniqueInput[];
    disconnect?: Prisma.MutuelleWhereUniqueInput | Prisma.MutuelleWhereUniqueInput[];
    delete?: Prisma.MutuelleWhereUniqueInput | Prisma.MutuelleWhereUniqueInput[];
    connect?: Prisma.MutuelleWhereUniqueInput | Prisma.MutuelleWhereUniqueInput[];
    update?: Prisma.MutuelleUpdateWithWhereUniqueWithoutPatientInput | Prisma.MutuelleUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.MutuelleUpdateManyWithWhereWithoutPatientInput | Prisma.MutuelleUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.MutuelleScalarWhereInput | Prisma.MutuelleScalarWhereInput[];
};
export type MutuelleUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.MutuelleCreateWithoutPatientInput, Prisma.MutuelleUncheckedCreateWithoutPatientInput> | Prisma.MutuelleCreateWithoutPatientInput[] | Prisma.MutuelleUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.MutuelleCreateOrConnectWithoutPatientInput | Prisma.MutuelleCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.MutuelleUpsertWithWhereUniqueWithoutPatientInput | Prisma.MutuelleUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.MutuelleCreateManyPatientInputEnvelope;
    set?: Prisma.MutuelleWhereUniqueInput | Prisma.MutuelleWhereUniqueInput[];
    disconnect?: Prisma.MutuelleWhereUniqueInput | Prisma.MutuelleWhereUniqueInput[];
    delete?: Prisma.MutuelleWhereUniqueInput | Prisma.MutuelleWhereUniqueInput[];
    connect?: Prisma.MutuelleWhereUniqueInput | Prisma.MutuelleWhereUniqueInput[];
    update?: Prisma.MutuelleUpdateWithWhereUniqueWithoutPatientInput | Prisma.MutuelleUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.MutuelleUpdateManyWithWhereWithoutPatientInput | Prisma.MutuelleUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.MutuelleScalarWhereInput | Prisma.MutuelleScalarWhereInput[];
};
export type MutuelleCreateWithoutPatientInput = {
    id?: string;
    name: string;
    number?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MutuelleUncheckedCreateWithoutPatientInput = {
    id?: string;
    name: string;
    number?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MutuelleCreateOrConnectWithoutPatientInput = {
    where: Prisma.MutuelleWhereUniqueInput;
    create: Prisma.XOR<Prisma.MutuelleCreateWithoutPatientInput, Prisma.MutuelleUncheckedCreateWithoutPatientInput>;
};
export type MutuelleCreateManyPatientInputEnvelope = {
    data: Prisma.MutuelleCreateManyPatientInput | Prisma.MutuelleCreateManyPatientInput[];
    skipDuplicates?: boolean;
};
export type MutuelleUpsertWithWhereUniqueWithoutPatientInput = {
    where: Prisma.MutuelleWhereUniqueInput;
    update: Prisma.XOR<Prisma.MutuelleUpdateWithoutPatientInput, Prisma.MutuelleUncheckedUpdateWithoutPatientInput>;
    create: Prisma.XOR<Prisma.MutuelleCreateWithoutPatientInput, Prisma.MutuelleUncheckedCreateWithoutPatientInput>;
};
export type MutuelleUpdateWithWhereUniqueWithoutPatientInput = {
    where: Prisma.MutuelleWhereUniqueInput;
    data: Prisma.XOR<Prisma.MutuelleUpdateWithoutPatientInput, Prisma.MutuelleUncheckedUpdateWithoutPatientInput>;
};
export type MutuelleUpdateManyWithWhereWithoutPatientInput = {
    where: Prisma.MutuelleScalarWhereInput;
    data: Prisma.XOR<Prisma.MutuelleUpdateManyMutationInput, Prisma.MutuelleUncheckedUpdateManyWithoutPatientInput>;
};
export type MutuelleScalarWhereInput = {
    AND?: Prisma.MutuelleScalarWhereInput | Prisma.MutuelleScalarWhereInput[];
    OR?: Prisma.MutuelleScalarWhereInput[];
    NOT?: Prisma.MutuelleScalarWhereInput | Prisma.MutuelleScalarWhereInput[];
    id?: Prisma.StringFilter<"Mutuelle"> | string;
    name?: Prisma.StringFilter<"Mutuelle"> | string;
    number?: Prisma.StringNullableFilter<"Mutuelle"> | string | null;
    startDate?: Prisma.DateTimeNullableFilter<"Mutuelle"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableFilter<"Mutuelle"> | Date | string | null;
    isActive?: Prisma.BoolFilter<"Mutuelle"> | boolean;
    patientId?: Prisma.StringFilter<"Mutuelle"> | string;
    createdAt?: Prisma.DateTimeFilter<"Mutuelle"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Mutuelle"> | Date | string;
};
export type MutuelleCreateManyPatientInput = {
    id?: string;
    name: string;
    number?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MutuelleUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MutuelleUncheckedUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MutuelleUncheckedUpdateManyWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MutuelleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    number?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isActive?: boolean;
    patientId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mutuelle"]>;
export type MutuelleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    number?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isActive?: boolean;
    patientId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mutuelle"]>;
export type MutuelleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    number?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isActive?: boolean;
    patientId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mutuelle"]>;
export type MutuelleSelectScalar = {
    id?: boolean;
    name?: boolean;
    number?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isActive?: boolean;
    patientId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MutuelleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "number" | "startDate" | "endDate" | "isActive" | "patientId" | "createdAt" | "updatedAt", ExtArgs["result"]["mutuelle"]>;
export type MutuelleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
};
export type MutuelleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
};
export type MutuelleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.PatientDefaultArgs<ExtArgs>;
};
export type $MutuellePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Mutuelle";
    objects: {
        patient: Prisma.$PatientPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        number: string | null;
        startDate: Date | null;
        endDate: Date | null;
        isActive: boolean;
        patientId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["mutuelle"]>;
    composites: {};
};
export type MutuelleGetPayload<S extends boolean | null | undefined | MutuelleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MutuellePayload, S>;
export type MutuelleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MutuelleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MutuelleCountAggregateInputType | true;
};
export interface MutuelleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Mutuelle'];
        meta: {
            name: 'Mutuelle';
        };
    };
    findUnique<T extends MutuelleFindUniqueArgs>(args: Prisma.SelectSubset<T, MutuelleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MutuelleClient<runtime.Types.Result.GetResult<Prisma.$MutuellePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MutuelleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MutuelleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MutuelleClient<runtime.Types.Result.GetResult<Prisma.$MutuellePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MutuelleFindFirstArgs>(args?: Prisma.SelectSubset<T, MutuelleFindFirstArgs<ExtArgs>>): Prisma.Prisma__MutuelleClient<runtime.Types.Result.GetResult<Prisma.$MutuellePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MutuelleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MutuelleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MutuelleClient<runtime.Types.Result.GetResult<Prisma.$MutuellePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MutuelleFindManyArgs>(args?: Prisma.SelectSubset<T, MutuelleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MutuellePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MutuelleCreateArgs>(args: Prisma.SelectSubset<T, MutuelleCreateArgs<ExtArgs>>): Prisma.Prisma__MutuelleClient<runtime.Types.Result.GetResult<Prisma.$MutuellePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MutuelleCreateManyArgs>(args?: Prisma.SelectSubset<T, MutuelleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MutuelleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MutuelleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MutuellePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MutuelleDeleteArgs>(args: Prisma.SelectSubset<T, MutuelleDeleteArgs<ExtArgs>>): Prisma.Prisma__MutuelleClient<runtime.Types.Result.GetResult<Prisma.$MutuellePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MutuelleUpdateArgs>(args: Prisma.SelectSubset<T, MutuelleUpdateArgs<ExtArgs>>): Prisma.Prisma__MutuelleClient<runtime.Types.Result.GetResult<Prisma.$MutuellePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MutuelleDeleteManyArgs>(args?: Prisma.SelectSubset<T, MutuelleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MutuelleUpdateManyArgs>(args: Prisma.SelectSubset<T, MutuelleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MutuelleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MutuelleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MutuellePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MutuelleUpsertArgs>(args: Prisma.SelectSubset<T, MutuelleUpsertArgs<ExtArgs>>): Prisma.Prisma__MutuelleClient<runtime.Types.Result.GetResult<Prisma.$MutuellePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MutuelleCountArgs>(args?: Prisma.Subset<T, MutuelleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MutuelleCountAggregateOutputType> : number>;
    aggregate<T extends MutuelleAggregateArgs>(args: Prisma.Subset<T, MutuelleAggregateArgs>): Prisma.PrismaPromise<GetMutuelleAggregateType<T>>;
    groupBy<T extends MutuelleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MutuelleGroupByArgs['orderBy'];
    } : {
        orderBy?: MutuelleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MutuelleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMutuelleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MutuelleFieldRefs;
}
export interface Prisma__MutuelleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    patient<T extends Prisma.PatientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientDefaultArgs<ExtArgs>>): Prisma.Prisma__PatientClient<runtime.Types.Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MutuelleFieldRefs {
    readonly id: Prisma.FieldRef<"Mutuelle", 'String'>;
    readonly name: Prisma.FieldRef<"Mutuelle", 'String'>;
    readonly number: Prisma.FieldRef<"Mutuelle", 'String'>;
    readonly startDate: Prisma.FieldRef<"Mutuelle", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"Mutuelle", 'DateTime'>;
    readonly isActive: Prisma.FieldRef<"Mutuelle", 'Boolean'>;
    readonly patientId: Prisma.FieldRef<"Mutuelle", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Mutuelle", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Mutuelle", 'DateTime'>;
}
export type MutuelleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MutuelleSelect<ExtArgs> | null;
    omit?: Prisma.MutuelleOmit<ExtArgs> | null;
    include?: Prisma.MutuelleInclude<ExtArgs> | null;
    where: Prisma.MutuelleWhereUniqueInput;
};
export type MutuelleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MutuelleSelect<ExtArgs> | null;
    omit?: Prisma.MutuelleOmit<ExtArgs> | null;
    include?: Prisma.MutuelleInclude<ExtArgs> | null;
    where: Prisma.MutuelleWhereUniqueInput;
};
export type MutuelleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MutuelleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MutuelleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MutuelleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MutuelleSelect<ExtArgs> | null;
    omit?: Prisma.MutuelleOmit<ExtArgs> | null;
    include?: Prisma.MutuelleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MutuelleCreateInput, Prisma.MutuelleUncheckedCreateInput>;
};
export type MutuelleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MutuelleCreateManyInput | Prisma.MutuelleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MutuelleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MutuelleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MutuelleOmit<ExtArgs> | null;
    data: Prisma.MutuelleCreateManyInput | Prisma.MutuelleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MutuelleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MutuelleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MutuelleSelect<ExtArgs> | null;
    omit?: Prisma.MutuelleOmit<ExtArgs> | null;
    include?: Prisma.MutuelleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MutuelleUpdateInput, Prisma.MutuelleUncheckedUpdateInput>;
    where: Prisma.MutuelleWhereUniqueInput;
};
export type MutuelleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MutuelleUpdateManyMutationInput, Prisma.MutuelleUncheckedUpdateManyInput>;
    where?: Prisma.MutuelleWhereInput;
    limit?: number;
};
export type MutuelleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MutuelleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MutuelleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MutuelleUpdateManyMutationInput, Prisma.MutuelleUncheckedUpdateManyInput>;
    where?: Prisma.MutuelleWhereInput;
    limit?: number;
    include?: Prisma.MutuelleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MutuelleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MutuelleSelect<ExtArgs> | null;
    omit?: Prisma.MutuelleOmit<ExtArgs> | null;
    include?: Prisma.MutuelleInclude<ExtArgs> | null;
    where: Prisma.MutuelleWhereUniqueInput;
    create: Prisma.XOR<Prisma.MutuelleCreateInput, Prisma.MutuelleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MutuelleUpdateInput, Prisma.MutuelleUncheckedUpdateInput>;
};
export type MutuelleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MutuelleSelect<ExtArgs> | null;
    omit?: Prisma.MutuelleOmit<ExtArgs> | null;
    include?: Prisma.MutuelleInclude<ExtArgs> | null;
    where: Prisma.MutuelleWhereUniqueInput;
};
export type MutuelleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MutuelleWhereInput;
    limit?: number;
};
export type MutuelleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MutuelleSelect<ExtArgs> | null;
    omit?: Prisma.MutuelleOmit<ExtArgs> | null;
    include?: Prisma.MutuelleInclude<ExtArgs> | null;
};
