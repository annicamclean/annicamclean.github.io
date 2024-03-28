CREATE TABLE "users" (
	"id"	INTEGER NOT NULL UNIQUE,
	"time"	NUMERIC NOT NULL,
	"name"	TEXT NOT NULL,
	"email"	TEXT NOT NULL UNIQUE,
	"userType"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE "categories" (
	"id"	INTEGER NOT NULL UNIQUE,
	"category"	TEXT NOT NULL,
	"order"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE "types" (
	"id"	INTEGER NOT NULL UNIQUE,
	"type"	TEXT NOT NULL,
	"order"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE "discounts" (
	"id"	INTEGER NOT NULL UNIQUE,
	"sDate"	NUMERIC NOT NULL,
	"eDate"	NUMERIC,
	"discountAmount"	REAL NOT NULL,
	"title"	TEXT NOT NULL,
	"type"	TEXT NOT NULL,
	"valid"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE "services" (
	"id"	INTEGER NOT NULL UNIQUE,
	"status"	TEXT NOT NULL,
	"watchRec"	NUMERIC,
	"watchRet"	NUMERIC,
	"user-id"	INTEGER NOT NULL,
	FOREIGN KEY("user-id") REFERENCES "users"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE "carts" (
	"id"	INTEGER NOT NULL UNIQUE,
	"status"	TEXT NOT NULL,
	"createDate"	NUMERIC NOT NULL,
	"user-id"	INTEGER NOT NULL,
	FOREIGN KEY("user-id") REFERENCES "users"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE "products" (
	"id"	INTEGER NOT NULL UNIQUE,
	"name"	TEXT NOT NULL,
	"description"	TEXT NOT NULL,
	"category-id"	INTEGER NOT NULL,
	"type-id"	INTEGER NOT NULL,
	"image"	TEXT NOT NULL,
	"price"	REAL NOT NULL,
	"reference"	TEXT NOT NULL,
	"cSize"	REAL NOT NULL,
	"cHeight"	REAL NOT NULL,
	"lugToLug"	REAL NOT NULL,
	"lWidth"	REAL NOT NULL,
	"crystalType"	TEXT NOT NULL,
	"wResistance"	TEXT NOT NULL,
	"mCaliber"	TEXT NOT NULL,
	"case"	TEXT NOT NULL,
	"cBack"	TEXT NOT NULL,
	"crown"	TEXT NOT NULL,
	"dialColor"	TEXT NOT NULL,
	"strap"	TEXT NOT NULL,
	"bezel"	TEXT NOT NULL,
	"jewels"	INTEGER NOT NULL,
	"pReserve"	TEXT NOT NULL,
	"vintage"	TEXT NOT NULL,
	"featured"	TEXT NOT NULL,
	FOREIGN KEY("category-id") REFERENCES "categories"("id"),
	FOREIGN KEY("type-id") REFERENCES "types"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE "watchServices" (
	"id"	INTEGER NOT NULL UNIQUE,
	"watch"	TEXT NOT NULL,
	"watchService"	TEXT NOT NULL,
	"service-id"	INTEGER NOT NULL,
	FOREIGN KEY("service-id") REFERENCES "services"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE "cartProducts" (
	"id"	INTEGER NOT NULL UNIQUE,
	"cart-id"	INTEGER NOT NULL,
	"product-id"	INTEGER NOT NULL,
	"quantity"	INTEGER NOT NULL,
	FOREIGN KEY("product-id") REFERENCES "products"("id"),
	FOREIGN KEY("cart-id") REFERENCES "carts"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE "similarProducts" (
	"id"	INTEGER NOT NULL,
	"image"	TEXT NOT NULL,
	FOREIGN KEY("id") REFERENCES "products"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);
