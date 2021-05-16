export interface BaseEntity {
    modifiedTime?: string;
    modifier?: string;
    createdTime?: string;
    creator?: string;
    isDeleted: '1' | '0';
}
