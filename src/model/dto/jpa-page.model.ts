export interface JpaPage<T> {
    content?: T[];
    totalElements?: number;
    size?: number;
    totalPages?: number;
}
