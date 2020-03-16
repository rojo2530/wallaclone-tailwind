import React from 'react';
import Header from '../../components/header/header.component';
import TagsHeader from '../../components/tagsHeader/tags-header-component';
import SearchBox from "../../components/search-box/search-box-component";

const HomePage = () => (
    <div>
        <Header />
        <TagsHeader />
        <SearchBox/>
    </div>
);

export default HomePage;
