import { RxJsonSchema } from 'rxdb';

export interface Track {
  uri: string;
  src: string;
  title: string;
  author: string;
  thumbUrl?: string;
  duration?: number;
}

export enum TrackDefaultsEnum {
  TITLE = 'Unknown',
  AUTHOR = 'Unknown',
}

export const trackSchema: RxJsonSchema<Track> = {
  title: 'track schema',
  version: 0,
  primaryKey: 'uri',
  type: 'object',
  properties: {
    uri: {
      type: 'string',
      maxLength: 10000, // <- the primary key must have set maxLength
    },
    src: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    author: {
      type: 'string',
    },
    thumbUrl: {
      type: 'string',
    },
    duration: {
      description: 'track duration',
      type: 'number',

      // number fields that are used in an index, must have set minimum, maximum and multipleOf
      // minimum: 0,
      // maximum: 150,
      // multipleOf: 1,
    },
  },
  required: ['uri', 'src', 'title', 'author', 'duration'],
  // indexes: ['duration'],
};
