import type { Schema, Struct } from '@strapi/strapi';

export interface ApproachItemApproaches extends Struct.ComponentSchema {
  collectionName: 'components_approach_item_approaches';
  info: {
    displayName: 'approaches';
  };
  attributes: {};
}

export interface DisorderItemDisorders extends Struct.ComponentSchema {
  collectionName: 'components_disorder_item_disorders';
  info: {
    displayName: 'disorders';
  };
  attributes: {};
}

export interface ExperienceItemExperienceItem extends Struct.ComponentSchema {
  collectionName: 'components_experience_item_experience_items';
  info: {
    displayName: 'experience_item';
  };
  attributes: {};
}

export interface TypeField extends Struct.ComponentSchema {
  collectionName: 'components_type_fields';
  info: {
    displayName: 'field';
  };
  attributes: {
    meta_description: Schema.Attribute.String;
    meta_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    meta_title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'approach-item.approaches': ApproachItemApproaches;
      'disorder-item.disorders': DisorderItemDisorders;
      'experience-item.experience-item': ExperienceItemExperienceItem;
      'type.field': TypeField;
    }
  }
}
