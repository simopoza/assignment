import { Module } from "@nestjs/common";
import { booksGateway } from "./gateway";

@Module({
    providers: [booksGateway],
})

export class GatewayModule {}