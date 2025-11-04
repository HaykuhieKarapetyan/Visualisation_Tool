import { Colors } from '@/common/colors';
import styled from 'styled-components';

export const TableContainer = styled.div`
    height: 100%;
    & {
        .ant-table-thead > tr > th {
            background: linear-gradient(180deg, #dce9f7 0%, #f5f9fd 100%);
            height: 48px;
            padding: 14px 16px;
            line-height: 19px;
        }

        .ant-table-thead > tr > th.ant-table-column-has-sorters:hover {
            background: linear-gradient(180deg, #dce9f7 0%, #f5f9fd 100%);
        }
        .ant-table-thead > tr > th.ant-table-column-sort {
            background: linear-gradient(180deg, #dce9f7 0%, #f5f9fd 100%);
        }

        &&&& .ant-table-row {
            cursor: pointer;
            & > .ant-table-cell {
                border-right: none;
                border-left: none;
                border-inline-end: none;
                padding: 14px 16px;

                &:last-child {
                    border-right: 1px solid ${Colors.PrimaryNeutral[60]};
                }
            }

            & > .ant-table-cell > a {
                border-right: none;
                border-left: none;
                border-inline-end: none;
                padding: 14px 16px;
            }
        }

        &&&& .ant-table-sticky-scroll {
            display: none;
        }

        &&&& .ant-table-summary {
            padding: 14px 16px;
            font-weight: 700;
            font-size: 14px;

            & .ant-table-cell {
                border-inline-end: none;
                padding: 14px 16px;
                background-color: ${Colors.PrimaryNeutral[20]};
                &:last-child {
                    border-right: 1px solid ${Colors.PrimaryNeutral[60]};
                }
            }
        }

        &&&& .ant-table-expanded-row > td {
            padding: unset;

            & .ant-table-cell {
                overflow-wrap: anywhere;
            }
        }

        &&&& .ant-table-expanded-row-fixed {
            width: auto !important;
        }
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 90vh;
`;
