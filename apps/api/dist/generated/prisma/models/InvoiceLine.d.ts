import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type InvoiceLineModel = runtime.Types.Result.DefaultSelection<Prisma.$InvoiceLinePayload>;
export type AggregateInvoiceLine = {
    _count: InvoiceLineCountAggregateOutputType | null;
    _avg: InvoiceLineAvgAggregateOutputType | null;
    _sum: InvoiceLineSumAggregateOutputType | null;
    _min: InvoiceLineMinAggregateOutputType | null;
    _max: InvoiceLineMaxAggregateOutputType | null;
};
export type InvoiceLineAvgAggregateOutputType = {
    quantity: number | null;
    unitPrice: number | null;
    total: number | null;
};
export type InvoiceLineSumAggregateOutputType = {
    quantity: number | null;
    unitPrice: number | null;
    total: number | null;
};
export type InvoiceLineMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    quantity: number | null;
    unitPrice: number | null;
    total: number | null;
    invoiceId: string | null;
    createdAt: Date | null;
};
export type InvoiceLineMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    quantity: number | null;
    unitPrice: number | null;
    total: number | null;
    invoiceId: string | null;
    createdAt: Date | null;
};
export type InvoiceLineCountAggregateOutputType = {
    id: number;
    description: number;
    quantity: number;
    unitPrice: number;
    total: number;
    invoiceId: number;
    createdAt: number;
    _all: number;
};
export type InvoiceLineAvgAggregateInputType = {
    quantity?: true;
    unitPrice?: true;
    total?: true;
};
export type InvoiceLineSumAggregateInputType = {
    quantity?: true;
    unitPrice?: true;
    total?: true;
};
export type InvoiceLineMinAggregateInputType = {
    id?: true;
    description?: true;
    quantity?: true;
    unitPrice?: true;
    total?: true;
    invoiceId?: true;
    createdAt?: true;
};
export type InvoiceLineMaxAggregateInputType = {
    id?: true;
    description?: true;
    quantity?: true;
    unitPrice?: true;
    total?: true;
    invoiceId?: true;
    createdAt?: true;
};
export type InvoiceLineCountAggregateInputType = {
    id?: true;
    description?: true;
    quantity?: true;
    unitPrice?: true;
    total?: true;
    invoiceId?: true;
    createdAt?: true;
    _all?: true;
};
export type InvoiceLineAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceLineWhereInput;
    orderBy?: Prisma.InvoiceLineOrderByWithRelationInput | Prisma.InvoiceLineOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceLineWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvoiceLineCountAggregateInputType;
    _avg?: InvoiceLineAvgAggregateInputType;
    _sum?: InvoiceLineSumAggregateInputType;
    _min?: InvoiceLineMinAggregateInputType;
    _max?: InvoiceLineMaxAggregateInputType;
};
export type GetInvoiceLineAggregateType<T extends InvoiceLineAggregateArgs> = {
    [P in keyof T & keyof AggregateInvoiceLine]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvoiceLine[P]> : Prisma.GetScalarType<T[P], AggregateInvoiceLine[P]>;
};
export type InvoiceLineGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceLineWhereInput;
    orderBy?: Prisma.InvoiceLineOrderByWithAggregationInput | Prisma.InvoiceLineOrderByWithAggregationInput[];
    by: Prisma.InvoiceLineScalarFieldEnum[] | Prisma.InvoiceLineScalarFieldEnum;
    having?: Prisma.InvoiceLineScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvoiceLineCountAggregateInputType | true;
    _avg?: InvoiceLineAvgAggregateInputType;
    _sum?: InvoiceLineSumAggregateInputType;
    _min?: InvoiceLineMinAggregateInputType;
    _max?: InvoiceLineMaxAggregateInputType;
};
export type InvoiceLineGroupByOutputType = {
    id: string;
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
    invoiceId: string;
    createdAt: Date;
    _count: InvoiceLineCountAggregateOutputType | null;
    _avg: InvoiceLineAvgAggregateOutputType | null;
    _sum: InvoiceLineSumAggregateOutputType | null;
    _min: InvoiceLineMinAggregateOutputType | null;
    _max: InvoiceLineMaxAggregateOutputType | null;
};
export type GetInvoiceLineGroupByPayload<T extends InvoiceLineGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvoiceLineGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvoiceLineGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvoiceLineGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvoiceLineGroupByOutputType[P]>;
}>>;
export type InvoiceLineWhereInput = {
    AND?: Prisma.InvoiceLineWhereInput | Prisma.InvoiceLineWhereInput[];
    OR?: Prisma.InvoiceLineWhereInput[];
    NOT?: Prisma.InvoiceLineWhereInput | Prisma.InvoiceLineWhereInput[];
    id?: Prisma.StringFilter<"InvoiceLine"> | string;
    description?: Prisma.StringFilter<"InvoiceLine"> | string;
    quantity?: Prisma.FloatFilter<"InvoiceLine"> | number;
    unitPrice?: Prisma.FloatFilter<"InvoiceLine"> | number;
    total?: Prisma.FloatFilter<"InvoiceLine"> | number;
    invoiceId?: Prisma.StringFilter<"InvoiceLine"> | string;
    createdAt?: Prisma.DateTimeFilter<"InvoiceLine"> | Date | string;
    invoice?: Prisma.XOR<Prisma.InvoiceScalarRelationFilter, Prisma.InvoiceWhereInput>;
};
export type InvoiceLineOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    invoice?: Prisma.InvoiceOrderByWithRelationInput;
};
export type InvoiceLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InvoiceLineWhereInput | Prisma.InvoiceLineWhereInput[];
    OR?: Prisma.InvoiceLineWhereInput[];
    NOT?: Prisma.InvoiceLineWhereInput | Prisma.InvoiceLineWhereInput[];
    description?: Prisma.StringFilter<"InvoiceLine"> | string;
    quantity?: Prisma.FloatFilter<"InvoiceLine"> | number;
    unitPrice?: Prisma.FloatFilter<"InvoiceLine"> | number;
    total?: Prisma.FloatFilter<"InvoiceLine"> | number;
    invoiceId?: Prisma.StringFilter<"InvoiceLine"> | string;
    createdAt?: Prisma.DateTimeFilter<"InvoiceLine"> | Date | string;
    invoice?: Prisma.XOR<Prisma.InvoiceScalarRelationFilter, Prisma.InvoiceWhereInput>;
}, "id">;
export type InvoiceLineOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.InvoiceLineCountOrderByAggregateInput;
    _avg?: Prisma.InvoiceLineAvgOrderByAggregateInput;
    _max?: Prisma.InvoiceLineMaxOrderByAggregateInput;
    _min?: Prisma.InvoiceLineMinOrderByAggregateInput;
    _sum?: Prisma.InvoiceLineSumOrderByAggregateInput;
};
export type InvoiceLineScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvoiceLineScalarWhereWithAggregatesInput | Prisma.InvoiceLineScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvoiceLineScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvoiceLineScalarWhereWithAggregatesInput | Prisma.InvoiceLineScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"InvoiceLine"> | string;
    description?: Prisma.StringWithAggregatesFilter<"InvoiceLine"> | string;
    quantity?: Prisma.FloatWithAggregatesFilter<"InvoiceLine"> | number;
    unitPrice?: Prisma.FloatWithAggregatesFilter<"InvoiceLine"> | number;
    total?: Prisma.FloatWithAggregatesFilter<"InvoiceLine"> | number;
    invoiceId?: Prisma.StringWithAggregatesFilter<"InvoiceLine"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"InvoiceLine"> | Date | string;
};
export type InvoiceLineCreateInput = {
    id?: string;
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
    createdAt?: Date | string;
    invoice: Prisma.InvoiceCreateNestedOneWithoutLinesInput;
};
export type InvoiceLineUncheckedCreateInput = {
    id?: string;
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
    invoiceId: string;
    createdAt?: Date | string;
};
export type InvoiceLineUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoice?: Prisma.InvoiceUpdateOneRequiredWithoutLinesNestedInput;
};
export type InvoiceLineUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    invoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceLineCreateManyInput = {
    id?: string;
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
    invoiceId: string;
    createdAt?: Date | string;
};
export type InvoiceLineUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceLineUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    invoiceId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceLineListRelationFilter = {
    every?: Prisma.InvoiceLineWhereInput;
    some?: Prisma.InvoiceLineWhereInput;
    none?: Prisma.InvoiceLineWhereInput;
};
export type InvoiceLineOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvoiceLineCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvoiceLineAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type InvoiceLineMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvoiceLineMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    invoiceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type InvoiceLineSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type InvoiceLineCreateNestedManyWithoutInvoiceInput = {
    create?: Prisma.XOR<Prisma.InvoiceLineCreateWithoutInvoiceInput, Prisma.InvoiceLineUncheckedCreateWithoutInvoiceInput> | Prisma.InvoiceLineCreateWithoutInvoiceInput[] | Prisma.InvoiceLineUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: Prisma.InvoiceLineCreateOrConnectWithoutInvoiceInput | Prisma.InvoiceLineCreateOrConnectWithoutInvoiceInput[];
    createMany?: Prisma.InvoiceLineCreateManyInvoiceInputEnvelope;
    connect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
};
export type InvoiceLineUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: Prisma.XOR<Prisma.InvoiceLineCreateWithoutInvoiceInput, Prisma.InvoiceLineUncheckedCreateWithoutInvoiceInput> | Prisma.InvoiceLineCreateWithoutInvoiceInput[] | Prisma.InvoiceLineUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: Prisma.InvoiceLineCreateOrConnectWithoutInvoiceInput | Prisma.InvoiceLineCreateOrConnectWithoutInvoiceInput[];
    createMany?: Prisma.InvoiceLineCreateManyInvoiceInputEnvelope;
    connect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
};
export type InvoiceLineUpdateManyWithoutInvoiceNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceLineCreateWithoutInvoiceInput, Prisma.InvoiceLineUncheckedCreateWithoutInvoiceInput> | Prisma.InvoiceLineCreateWithoutInvoiceInput[] | Prisma.InvoiceLineUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: Prisma.InvoiceLineCreateOrConnectWithoutInvoiceInput | Prisma.InvoiceLineCreateOrConnectWithoutInvoiceInput[];
    upsert?: Prisma.InvoiceLineUpsertWithWhereUniqueWithoutInvoiceInput | Prisma.InvoiceLineUpsertWithWhereUniqueWithoutInvoiceInput[];
    createMany?: Prisma.InvoiceLineCreateManyInvoiceInputEnvelope;
    set?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    disconnect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    delete?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    connect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    update?: Prisma.InvoiceLineUpdateWithWhereUniqueWithoutInvoiceInput | Prisma.InvoiceLineUpdateWithWhereUniqueWithoutInvoiceInput[];
    updateMany?: Prisma.InvoiceLineUpdateManyWithWhereWithoutInvoiceInput | Prisma.InvoiceLineUpdateManyWithWhereWithoutInvoiceInput[];
    deleteMany?: Prisma.InvoiceLineScalarWhereInput | Prisma.InvoiceLineScalarWhereInput[];
};
export type InvoiceLineUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: Prisma.XOR<Prisma.InvoiceLineCreateWithoutInvoiceInput, Prisma.InvoiceLineUncheckedCreateWithoutInvoiceInput> | Prisma.InvoiceLineCreateWithoutInvoiceInput[] | Prisma.InvoiceLineUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?: Prisma.InvoiceLineCreateOrConnectWithoutInvoiceInput | Prisma.InvoiceLineCreateOrConnectWithoutInvoiceInput[];
    upsert?: Prisma.InvoiceLineUpsertWithWhereUniqueWithoutInvoiceInput | Prisma.InvoiceLineUpsertWithWhereUniqueWithoutInvoiceInput[];
    createMany?: Prisma.InvoiceLineCreateManyInvoiceInputEnvelope;
    set?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    disconnect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    delete?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    connect?: Prisma.InvoiceLineWhereUniqueInput | Prisma.InvoiceLineWhereUniqueInput[];
    update?: Prisma.InvoiceLineUpdateWithWhereUniqueWithoutInvoiceInput | Prisma.InvoiceLineUpdateWithWhereUniqueWithoutInvoiceInput[];
    updateMany?: Prisma.InvoiceLineUpdateManyWithWhereWithoutInvoiceInput | Prisma.InvoiceLineUpdateManyWithWhereWithoutInvoiceInput[];
    deleteMany?: Prisma.InvoiceLineScalarWhereInput | Prisma.InvoiceLineScalarWhereInput[];
};
export type InvoiceLineCreateWithoutInvoiceInput = {
    id?: string;
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
    createdAt?: Date | string;
};
export type InvoiceLineUncheckedCreateWithoutInvoiceInput = {
    id?: string;
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
    createdAt?: Date | string;
};
export type InvoiceLineCreateOrConnectWithoutInvoiceInput = {
    where: Prisma.InvoiceLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceLineCreateWithoutInvoiceInput, Prisma.InvoiceLineUncheckedCreateWithoutInvoiceInput>;
};
export type InvoiceLineCreateManyInvoiceInputEnvelope = {
    data: Prisma.InvoiceLineCreateManyInvoiceInput | Prisma.InvoiceLineCreateManyInvoiceInput[];
    skipDuplicates?: boolean;
};
export type InvoiceLineUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: Prisma.InvoiceLineWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvoiceLineUpdateWithoutInvoiceInput, Prisma.InvoiceLineUncheckedUpdateWithoutInvoiceInput>;
    create: Prisma.XOR<Prisma.InvoiceLineCreateWithoutInvoiceInput, Prisma.InvoiceLineUncheckedCreateWithoutInvoiceInput>;
};
export type InvoiceLineUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: Prisma.InvoiceLineWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvoiceLineUpdateWithoutInvoiceInput, Prisma.InvoiceLineUncheckedUpdateWithoutInvoiceInput>;
};
export type InvoiceLineUpdateManyWithWhereWithoutInvoiceInput = {
    where: Prisma.InvoiceLineScalarWhereInput;
    data: Prisma.XOR<Prisma.InvoiceLineUpdateManyMutationInput, Prisma.InvoiceLineUncheckedUpdateManyWithoutInvoiceInput>;
};
export type InvoiceLineScalarWhereInput = {
    AND?: Prisma.InvoiceLineScalarWhereInput | Prisma.InvoiceLineScalarWhereInput[];
    OR?: Prisma.InvoiceLineScalarWhereInput[];
    NOT?: Prisma.InvoiceLineScalarWhereInput | Prisma.InvoiceLineScalarWhereInput[];
    id?: Prisma.StringFilter<"InvoiceLine"> | string;
    description?: Prisma.StringFilter<"InvoiceLine"> | string;
    quantity?: Prisma.FloatFilter<"InvoiceLine"> | number;
    unitPrice?: Prisma.FloatFilter<"InvoiceLine"> | number;
    total?: Prisma.FloatFilter<"InvoiceLine"> | number;
    invoiceId?: Prisma.StringFilter<"InvoiceLine"> | string;
    createdAt?: Prisma.DateTimeFilter<"InvoiceLine"> | Date | string;
};
export type InvoiceLineCreateManyInvoiceInput = {
    id?: string;
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
    createdAt?: Date | string;
};
export type InvoiceLineUpdateWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceLineUncheckedUpdateWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceLineUncheckedUpdateManyWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    total?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceLineSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    description?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    total?: boolean;
    invoiceId?: boolean;
    createdAt?: boolean;
    invoice?: boolean | Prisma.InvoiceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invoiceLine"]>;
export type InvoiceLineSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    description?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    total?: boolean;
    invoiceId?: boolean;
    createdAt?: boolean;
    invoice?: boolean | Prisma.InvoiceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invoiceLine"]>;
export type InvoiceLineSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    description?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    total?: boolean;
    invoiceId?: boolean;
    createdAt?: boolean;
    invoice?: boolean | Prisma.InvoiceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invoiceLine"]>;
export type InvoiceLineSelectScalar = {
    id?: boolean;
    description?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    total?: boolean;
    invoiceId?: boolean;
    createdAt?: boolean;
};
export type InvoiceLineOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "description" | "quantity" | "unitPrice" | "total" | "invoiceId" | "createdAt", ExtArgs["result"]["invoiceLine"]>;
export type InvoiceLineInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invoice?: boolean | Prisma.InvoiceDefaultArgs<ExtArgs>;
};
export type InvoiceLineIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invoice?: boolean | Prisma.InvoiceDefaultArgs<ExtArgs>;
};
export type InvoiceLineIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invoice?: boolean | Prisma.InvoiceDefaultArgs<ExtArgs>;
};
export type $InvoiceLinePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InvoiceLine";
    objects: {
        invoice: Prisma.$InvoicePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        description: string;
        quantity: number;
        unitPrice: number;
        total: number;
        invoiceId: string;
        createdAt: Date;
    }, ExtArgs["result"]["invoiceLine"]>;
    composites: {};
};
export type InvoiceLineGetPayload<S extends boolean | null | undefined | InvoiceLineDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload, S>;
export type InvoiceLineCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvoiceLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvoiceLineCountAggregateInputType | true;
};
export interface InvoiceLineDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InvoiceLine'];
        meta: {
            name: 'InvoiceLine';
        };
    };
    findUnique<T extends InvoiceLineFindUniqueArgs>(args: Prisma.SelectSubset<T, InvoiceLineFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvoiceLineFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvoiceLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvoiceLineFindFirstArgs>(args?: Prisma.SelectSubset<T, InvoiceLineFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvoiceLineFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvoiceLineFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvoiceLineFindManyArgs>(args?: Prisma.SelectSubset<T, InvoiceLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvoiceLineCreateArgs>(args: Prisma.SelectSubset<T, InvoiceLineCreateArgs<ExtArgs>>): Prisma.Prisma__InvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvoiceLineCreateManyArgs>(args?: Prisma.SelectSubset<T, InvoiceLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InvoiceLineCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvoiceLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InvoiceLineDeleteArgs>(args: Prisma.SelectSubset<T, InvoiceLineDeleteArgs<ExtArgs>>): Prisma.Prisma__InvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvoiceLineUpdateArgs>(args: Prisma.SelectSubset<T, InvoiceLineUpdateArgs<ExtArgs>>): Prisma.Prisma__InvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvoiceLineDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvoiceLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvoiceLineUpdateManyArgs>(args: Prisma.SelectSubset<T, InvoiceLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InvoiceLineUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvoiceLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InvoiceLineUpsertArgs>(args: Prisma.SelectSubset<T, InvoiceLineUpsertArgs<ExtArgs>>): Prisma.Prisma__InvoiceLineClient<runtime.Types.Result.GetResult<Prisma.$InvoiceLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvoiceLineCountArgs>(args?: Prisma.Subset<T, InvoiceLineCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvoiceLineCountAggregateOutputType> : number>;
    aggregate<T extends InvoiceLineAggregateArgs>(args: Prisma.Subset<T, InvoiceLineAggregateArgs>): Prisma.PrismaPromise<GetInvoiceLineAggregateType<T>>;
    groupBy<T extends InvoiceLineGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvoiceLineGroupByArgs['orderBy'];
    } : {
        orderBy?: InvoiceLineGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvoiceLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvoiceLineFieldRefs;
}
export interface Prisma__InvoiceLineClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    invoice<T extends Prisma.InvoiceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvoiceDefaultArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvoiceLineFieldRefs {
    readonly id: Prisma.FieldRef<"InvoiceLine", 'String'>;
    readonly description: Prisma.FieldRef<"InvoiceLine", 'String'>;
    readonly quantity: Prisma.FieldRef<"InvoiceLine", 'Float'>;
    readonly unitPrice: Prisma.FieldRef<"InvoiceLine", 'Float'>;
    readonly total: Prisma.FieldRef<"InvoiceLine", 'Float'>;
    readonly invoiceId: Prisma.FieldRef<"InvoiceLine", 'String'>;
    readonly createdAt: Prisma.FieldRef<"InvoiceLine", 'DateTime'>;
}
export type InvoiceLineFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceLineSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceLineOmit<ExtArgs> | null;
    include?: Prisma.InvoiceLineInclude<ExtArgs> | null;
    where: Prisma.InvoiceLineWhereUniqueInput;
};
export type InvoiceLineFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceLineSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceLineOmit<ExtArgs> | null;
    include?: Prisma.InvoiceLineInclude<ExtArgs> | null;
    where: Prisma.InvoiceLineWhereUniqueInput;
};
export type InvoiceLineFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InvoiceLineFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InvoiceLineFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InvoiceLineCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceLineSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceLineOmit<ExtArgs> | null;
    include?: Prisma.InvoiceLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvoiceLineCreateInput, Prisma.InvoiceLineUncheckedCreateInput>;
};
export type InvoiceLineCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvoiceLineCreateManyInput | Prisma.InvoiceLineCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvoiceLineCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceLineSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvoiceLineOmit<ExtArgs> | null;
    data: Prisma.InvoiceLineCreateManyInput | Prisma.InvoiceLineCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InvoiceLineIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InvoiceLineUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceLineSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceLineOmit<ExtArgs> | null;
    include?: Prisma.InvoiceLineInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvoiceLineUpdateInput, Prisma.InvoiceLineUncheckedUpdateInput>;
    where: Prisma.InvoiceLineWhereUniqueInput;
};
export type InvoiceLineUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvoiceLineUpdateManyMutationInput, Prisma.InvoiceLineUncheckedUpdateManyInput>;
    where?: Prisma.InvoiceLineWhereInput;
    limit?: number;
};
export type InvoiceLineUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceLineSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvoiceLineOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvoiceLineUpdateManyMutationInput, Prisma.InvoiceLineUncheckedUpdateManyInput>;
    where?: Prisma.InvoiceLineWhereInput;
    limit?: number;
    include?: Prisma.InvoiceLineIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InvoiceLineUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceLineSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceLineOmit<ExtArgs> | null;
    include?: Prisma.InvoiceLineInclude<ExtArgs> | null;
    where: Prisma.InvoiceLineWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvoiceLineCreateInput, Prisma.InvoiceLineUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvoiceLineUpdateInput, Prisma.InvoiceLineUncheckedUpdateInput>;
};
export type InvoiceLineDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceLineSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceLineOmit<ExtArgs> | null;
    include?: Prisma.InvoiceLineInclude<ExtArgs> | null;
    where: Prisma.InvoiceLineWhereUniqueInput;
};
export type InvoiceLineDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceLineWhereInput;
    limit?: number;
};
export type InvoiceLineDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceLineSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceLineOmit<ExtArgs> | null;
    include?: Prisma.InvoiceLineInclude<ExtArgs> | null;
};
