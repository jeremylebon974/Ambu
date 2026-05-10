-- CreateTable
CREATE TABLE "Pda" (
    "id" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "vehicleId" TEXT,
    "organizationId" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastSeen" TIMESTAMP(3),
    "currentUserId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pda_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pda_reference_key" ON "Pda"("reference");

-- AddForeignKey
ALTER TABLE "Pda" ADD CONSTRAINT "Pda_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pda" ADD CONSTRAINT "Pda_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pda" ADD CONSTRAINT "Pda_currentUserId_fkey" FOREIGN KEY ("currentUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
