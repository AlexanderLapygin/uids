/**
 * In interface of Dag
 */
import { UID } from '../dist/types'

export interface GlossIn {
}

/**
 * Out interface of Dag
 */
export interface GlossOut {
  /**
   * Add gloss.
   * @return {DagOut} itself
   */
  addGloss(uid: UID, name: String, meaning: String): Promise<GlossOut>
}

/**
 * Provides DAG - Directed Acyclic Graph functionality.
 */
export class Gloss implements GlossIn, GlossOut {
}
