/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Clientdetails` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Clientdetails_name_key" ON "Clientdetails"("name");
