-- CreateTable
CREATE TABLE "bank" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(32) NOT NULL,

    CONSTRAINT "bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BankToUsers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BankToUsers_AB_unique" ON "_BankToUsers"("A", "B");

-- CreateIndex
CREATE INDEX "_BankToUsers_B_index" ON "_BankToUsers"("B");

-- AddForeignKey
ALTER TABLE "_BankToUsers" ADD CONSTRAINT "_BankToUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "bank"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BankToUsers" ADD CONSTRAINT "_BankToUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
