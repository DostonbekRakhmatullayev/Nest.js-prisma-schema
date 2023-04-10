-- CreateTable
CREATE TABLE "card" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(32) NOT NULL,
    "usersId" INTEGER NOT NULL,
    "bankId" INTEGER NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
