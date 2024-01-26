-- CreateTable
CREATE TABLE "Pet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "pet_type" TEXT NOT NULL,
    "birth" DATETIME NOT NULL,
    "image" TEXT,
    "memo" TEXT,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Pet_name_key" ON "Pet"("name");
