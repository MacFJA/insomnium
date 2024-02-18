export const prefix = 'org';

export interface Organization {
  _id: string;
  name: string;
}

export const DEFAULT_ORGANIZATION_ID = `${prefix}_default-project`;

export const defaultOrganization: Organization = {
  _id: DEFAULT_ORGANIZATION_ID,
  name: 'Personal Projects',
};
