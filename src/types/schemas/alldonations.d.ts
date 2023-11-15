/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Alldonations = {
	$comment?: "tiltify-control's fields";
	amount?: Amount;
	id?: string;
	campaign_id?: string;
	completed_at?: string;
	created_at?: string;
	donor_comment?: string;
	donor_name?: string;
	fundraising_event_id?: string | null;
	legacy_id?: number;
	poll_id?: string | null;
	poll_option_id?: string | null;
	reward_id?: string | null;
	sustained?: boolean;
	target_id?: string | null;
	team_event_id?: string | null;
	shown?: boolean;
	read?: boolean;
	timeToApprove?: number;
	amountDisplay?: number;
	/**
	 * true = approved, false = censored or undefined = undecided
	 */
	modStatus?: boolean;
	[k: string]: unknown;
}[];

export interface Amount {
	currency: string;
	value: string;
	[k: string]: unknown;
}
