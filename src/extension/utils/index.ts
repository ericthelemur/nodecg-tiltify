import type NodeCG from '@nodecg/types';
import type { Configschema } from '../../types/schemas';

let nodecg: NodeCG.ServerAPI<Configschema>;

export function storeNodeCG(ncg: NodeCG.ServerAPI<Configschema>) {
    nodecg = ncg;
}

export function getNodeCG(): NodeCG.ServerAPI<Configschema> {
    return nodecg;
}

export function isEmpty(string: string | undefined | null) {
    return string === undefined || string === null || string === ""
}