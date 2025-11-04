import { Col, Select } from 'antd';
import {
    CustomSelectContainer,
    FiltersContainer,
    SelectContainer,
} from './styles';
import { Dispatch, FC, SetStateAction } from 'react';
import { useQuery } from '@tanstack/react-query';
import { SurveyVisualizerService } from '@/api/surveyVisualizer.service';
import { EQueryNames } from '@/constants';
import { ICategoryItem } from '@/common/types';

type FiltersProps = {
    category?: number;
    setCategory: Dispatch<SetStateAction<number | undefined>>;
};

export const Filters: FC<FiltersProps> = ({ category, setCategory }) => {
    const { data: options } = useQuery({
        queryKey: [EQueryNames.categoryOptions],
        queryFn: SurveyVisualizerService.getCategoryOptions,
        select: (response: { trivia_categories: ICategoryItem[] }) =>
            response?.trivia_categories.map(category => ({
                value: category.id,
                label: category.name,
            })),
    });

    return (
        <FiltersContainer>
            <Col sm={16} />
            <SelectContainer sm={8}>
                <CustomSelectContainer>
                    <Select
                        options={options}
                        value={category}
                        onChange={value => setCategory(value)}
                    />
                </CustomSelectContainer>
            </SelectContainer>
        </FiltersContainer>
    );
};
