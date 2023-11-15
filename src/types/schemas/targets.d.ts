/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Targets = {
	active: boolean;
	amount: Amount;
	amount_raised: Amount;
	ends_at: string;
	id: string;
	inserted_at?: string;
	legacy_id?: number;
	name: string;
	updated_at?: string;
	[k: string]: unknown;
}[];

export interface Amount {
	currency: string;
	value: string;
	[k: string]: unknown;
}
