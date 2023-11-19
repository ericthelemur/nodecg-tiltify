/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Donationpolls = {
	active: boolean;
	amount_raised: Amount;
	id: string;
	inserted_at?: string;
	legacy_id?: number;
	name: string;
	options: {
		amount_raised: Amount;
		id: string;
		inserted_at?: string;
		legacy_id?: number;
		name: string;
		updated_at?: string;
		[k: string]: unknown;
	}[];
	updated_at?: string;
	[k: string]: unknown;
}[];

export interface Amount {
	currency: string;
	value: string | number;
	[k: string]: unknown;
}
