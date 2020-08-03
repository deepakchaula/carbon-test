import React from 'react';
import RepoTable from './RepoTable';
import PropTypes from "prop-types";

const headers = [
    {
        key: 'title',
        header: 'Title'
    }, {
        key: 'author',
        header: 'Author'
    }, {
        key: 'category',
        header: 'Category'
    }, {
        key: 'buttonDel',
        header: ''
    }
];

const rows = [
    {
        id: '1',
        title: 'React: The Big Picture',
        author: 'Scott Allen',
        category: 'JavaScript',
        buttonDel: '123'
    }, {
        id: '2',
        title: 'Securing React Apps with Auth0',
        author: 'Cory House',
        category: 'JavaScript',
        buttonDel: '123'
    }, {
        id: '3',
        title: 'Building a JavaScript Development Environment',
        author: 'Cory House',
        category: 'JavaScript',
        buttonDel: '123'
    },
];

const RepoPage = () => {
    return (
        <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
            <div className="bx--row repo-page__r1">
                <div className="bx--col-lg-16">
                    <RepoTable headers={headers}
                        rows={rows}/>
                </div>
            </div>
        </div>
    );

};

RepoPage.propTypes = {
    courses: PropTypes.array.isRequired,
    onDeleteClick: PropTypes.func.isRequired
};

export default RepoPage;
