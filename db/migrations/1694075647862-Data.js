module.exports = class Data1694075647862 {
    name = 'Data1694075647862'

    async up(db) {
        await db.query(`CREATE TABLE "block" ("id" character varying NOT NULL, "number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_d0925763efb591c2e2ffb267572" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_38414873c187a3e0c7943bc4c7" ON "block" ("number") `)
        await db.query(`CREATE INDEX "IDX_5c67cbcf4960c1a39e5fe25e87" ON "block" ("timestamp") `)
        await db.query(`CREATE TABLE "transaction" ("id" character varying NOT NULL, "block_number" integer, "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "hash" text NOT NULL, "to" text, "from" text, "status" integer, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_2d99bb5a0ab5fb8cf8b746eb39" ON "transaction" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_bf7f889412fc52430b609e70b4" ON "transaction" ("block_timestamp") `)
        await db.query(`CREATE INDEX "IDX_de4f0899c41c688529784bc443" ON "transaction" ("hash") `)
        await db.query(`CREATE INDEX "IDX_1713783ebe978fa2ae9654e4bb" ON "transaction" ("to") `)
        await db.query(`CREATE INDEX "IDX_290df3897fac99713afb5f3d7a" ON "transaction" ("from") `)
        await db.query(`CREATE INDEX "IDX_63f749fc7f7178ae1ad85d3b95" ON "transaction" ("status") `)
        await db.query(`CREATE TABLE "contract_event_transfer" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "transaction_hash" text NOT NULL, "contract" text NOT NULL, "event_name" text NOT NULL, "from" text NOT NULL, "to" text NOT NULL, "value" numeric NOT NULL, CONSTRAINT "PK_e707a572fb447fc7d06c8c68be8" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_5cad8ebf880d2f4b946ea3b5df" ON "contract_event_transfer" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_c58c60b9116c57a906183795d6" ON "contract_event_transfer" ("block_timestamp") `)
        await db.query(`CREATE INDEX "IDX_13453829034c1043450bd22aef" ON "contract_event_transfer" ("transaction_hash") `)
        await db.query(`CREATE INDEX "IDX_2ba2d6163cda7ec75cbc30f948" ON "contract_event_transfer" ("contract") `)
        await db.query(`CREATE INDEX "IDX_4dbc0481c395b826a3723bec98" ON "contract_event_transfer" ("event_name") `)
        await db.query(`CREATE INDEX "IDX_e54d341a417e9bc9c7d7e7a01a" ON "contract_event_transfer" ("from") `)
        await db.query(`CREATE INDEX "IDX_05e74649c4edab71071dc0a5a5" ON "contract_event_transfer" ("to") `)
        await db.query(`CREATE TABLE "contract_function_approve" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "transaction_hash" text NOT NULL, "contract" text NOT NULL, "function_name" text NOT NULL, "function_value" numeric, "function_success" boolean, "spender" text NOT NULL, "value" numeric NOT NULL, CONSTRAINT "PK_620790096b4a61c47a5daae2a5d" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_ef2f547048bcd5c4fcf708cc76" ON "contract_function_approve" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_1da412ed8806c3eb3edc1c3746" ON "contract_function_approve" ("block_timestamp") `)
        await db.query(`CREATE INDEX "IDX_5e8f733f06b3ebdd82315f4f48" ON "contract_function_approve" ("transaction_hash") `)
        await db.query(`CREATE INDEX "IDX_a4f064cd750cef4de970da3c85" ON "contract_function_approve" ("contract") `)
        await db.query(`CREATE INDEX "IDX_50a1bbde6d31da2aceb23eddc2" ON "contract_function_approve" ("function_name") `)
        await db.query(`CREATE INDEX "IDX_2cfad893512e9c052dda862f21" ON "contract_function_approve" ("function_success") `)
        await db.query(`CREATE TABLE "contract_function_transfer_from" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "transaction_hash" text NOT NULL, "contract" text NOT NULL, "function_name" text NOT NULL, "function_value" numeric, "function_success" boolean, "from" text NOT NULL, "to" text NOT NULL, "value" numeric NOT NULL, CONSTRAINT "PK_c5887c3501eebde458ae7e17a9a" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_46e860cc0d6d394cdf76c783d7" ON "contract_function_transfer_from" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_bf4c3c3f657baf6b7c7cc34bac" ON "contract_function_transfer_from" ("block_timestamp") `)
        await db.query(`CREATE INDEX "IDX_51521694e4b59724487aa42c87" ON "contract_function_transfer_from" ("transaction_hash") `)
        await db.query(`CREATE INDEX "IDX_e050d7d5cef618589700647c0f" ON "contract_function_transfer_from" ("contract") `)
        await db.query(`CREATE INDEX "IDX_803c9141683c5a2546d16a9049" ON "contract_function_transfer_from" ("function_name") `)
        await db.query(`CREATE INDEX "IDX_f2bd7d3cf6c9f80dd4a6630431" ON "contract_function_transfer_from" ("function_success") `)
        await db.query(`CREATE TABLE "contract_function_transfer" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "transaction_hash" text NOT NULL, "contract" text NOT NULL, "function_name" text NOT NULL, "function_value" numeric, "function_success" boolean, "to" text NOT NULL, "value" numeric NOT NULL, CONSTRAINT "PK_b372dfa44a97b68d054c5c0c58c" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_2db8337300b2517edf42247fec" ON "contract_function_transfer" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_7ca473dcf287317a27e7cba959" ON "contract_function_transfer" ("block_timestamp") `)
        await db.query(`CREATE INDEX "IDX_04b32936261ce5ff9ec5e2c252" ON "contract_function_transfer" ("transaction_hash") `)
        await db.query(`CREATE INDEX "IDX_84d1aff9ff9f56ef7775d4b0fc" ON "contract_function_transfer" ("contract") `)
        await db.query(`CREATE INDEX "IDX_1ba179fa8e998480bfb1085967" ON "contract_function_transfer" ("function_name") `)
        await db.query(`CREATE INDEX "IDX_ce0332b2fe5a7f6ea3a292e2d9" ON "contract_function_transfer" ("function_success") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "block"`)
        await db.query(`DROP INDEX "public"."IDX_38414873c187a3e0c7943bc4c7"`)
        await db.query(`DROP INDEX "public"."IDX_5c67cbcf4960c1a39e5fe25e87"`)
        await db.query(`DROP TABLE "transaction"`)
        await db.query(`DROP INDEX "public"."IDX_2d99bb5a0ab5fb8cf8b746eb39"`)
        await db.query(`DROP INDEX "public"."IDX_bf7f889412fc52430b609e70b4"`)
        await db.query(`DROP INDEX "public"."IDX_de4f0899c41c688529784bc443"`)
        await db.query(`DROP INDEX "public"."IDX_1713783ebe978fa2ae9654e4bb"`)
        await db.query(`DROP INDEX "public"."IDX_290df3897fac99713afb5f3d7a"`)
        await db.query(`DROP INDEX "public"."IDX_63f749fc7f7178ae1ad85d3b95"`)
        await db.query(`DROP TABLE "contract_event_transfer"`)
        await db.query(`DROP INDEX "public"."IDX_5cad8ebf880d2f4b946ea3b5df"`)
        await db.query(`DROP INDEX "public"."IDX_c58c60b9116c57a906183795d6"`)
        await db.query(`DROP INDEX "public"."IDX_13453829034c1043450bd22aef"`)
        await db.query(`DROP INDEX "public"."IDX_2ba2d6163cda7ec75cbc30f948"`)
        await db.query(`DROP INDEX "public"."IDX_4dbc0481c395b826a3723bec98"`)
        await db.query(`DROP INDEX "public"."IDX_e54d341a417e9bc9c7d7e7a01a"`)
        await db.query(`DROP INDEX "public"."IDX_05e74649c4edab71071dc0a5a5"`)
        await db.query(`DROP TABLE "contract_function_approve"`)
        await db.query(`DROP INDEX "public"."IDX_ef2f547048bcd5c4fcf708cc76"`)
        await db.query(`DROP INDEX "public"."IDX_1da412ed8806c3eb3edc1c3746"`)
        await db.query(`DROP INDEX "public"."IDX_5e8f733f06b3ebdd82315f4f48"`)
        await db.query(`DROP INDEX "public"."IDX_a4f064cd750cef4de970da3c85"`)
        await db.query(`DROP INDEX "public"."IDX_50a1bbde6d31da2aceb23eddc2"`)
        await db.query(`DROP INDEX "public"."IDX_2cfad893512e9c052dda862f21"`)
        await db.query(`DROP TABLE "contract_function_transfer_from"`)
        await db.query(`DROP INDEX "public"."IDX_46e860cc0d6d394cdf76c783d7"`)
        await db.query(`DROP INDEX "public"."IDX_bf4c3c3f657baf6b7c7cc34bac"`)
        await db.query(`DROP INDEX "public"."IDX_51521694e4b59724487aa42c87"`)
        await db.query(`DROP INDEX "public"."IDX_e050d7d5cef618589700647c0f"`)
        await db.query(`DROP INDEX "public"."IDX_803c9141683c5a2546d16a9049"`)
        await db.query(`DROP INDEX "public"."IDX_f2bd7d3cf6c9f80dd4a6630431"`)
        await db.query(`DROP TABLE "contract_function_transfer"`)
        await db.query(`DROP INDEX "public"."IDX_2db8337300b2517edf42247fec"`)
        await db.query(`DROP INDEX "public"."IDX_7ca473dcf287317a27e7cba959"`)
        await db.query(`DROP INDEX "public"."IDX_04b32936261ce5ff9ec5e2c252"`)
        await db.query(`DROP INDEX "public"."IDX_84d1aff9ff9f56ef7775d4b0fc"`)
        await db.query(`DROP INDEX "public"."IDX_1ba179fa8e998480bfb1085967"`)
        await db.query(`DROP INDEX "public"."IDX_ce0332b2fe5a7f6ea3a292e2d9"`)
    }
}
