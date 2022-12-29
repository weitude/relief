import { Tag } from 'antd';
import { useEffect } from 'react';
import { useRelief } from '../hooks/useRelief';

const { CheckableTag } = Tag;
const tagsdata = ['academic', 'emo', 'family', 'friendship', 'life', 'romantic'];

const SelectTag = () => {
    const { chosenTag, setChosenTag } = useRelief();

    const handleChange = (tag, checked) => {
        const nextChosenTags = checked
        ? [...chosenTag, tag]
        : chosenTag.filter((t) => t !== tag);
        setChosenTag(nextChosenTags);
    };

    return (
            tagsdata.map((tag) => (
                <CheckableTag
                    key={tag}
                    checked={chosenTag.indexOf(tag) > -1}
                    onChange={(checked) => handleChange(tag, checked)}
                >
                    {tag}
                </CheckableTag>
            ))
    );
};

export default SelectTag;