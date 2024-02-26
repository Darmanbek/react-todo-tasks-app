import { Input } from "antd";
import { BsSearch } from "react-icons/bs";
import React from "react";

interface SearchInputProps {
    styles: string
}

const SearchInput: React.FC<SearchInputProps> = ({ styles="" }) => {
    return (
        <Input
            size="large"
            className={styles}
            suffix={<BsSearch />}
            placeholder="Искать задачу"
        />
    );
};

export default SearchInput;
