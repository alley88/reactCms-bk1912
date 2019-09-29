import React, { Component } from "react"
import { Table, Divider, Tag } from 'antd';
import { booksListApi } from "@api/books"

const columns = [
    {
        title: '作者头像',
        dataIndex: 'authorIcon',
        key: 'authorIcon',
        render: url => <img src={url} style={{width:'30px',height:'30px'}}/>,
    },
    {
        title: '作者笔名',
        dataIndex: 'authorName',
        key: 'authorName',
    },
    {
        title: '书籍名称',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title:"书籍封面",
        dataIndex:"icon",
        key:"icon",
        render: url => <img src={url} style={{width:'50px',height:'70px'}}/>
    },
    {
        title: 'Tags',
        key: 'bookTags',
        dataIndex: 'bookTags',
        render: tags => (
            <span>
                {tags.map(tag => {
                    return (
                        <Tag color='volcano' key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </span>
        ),
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
                <a>操作</a>
                <Divider type="vertical" />
                <a>删除</a>
            </span>
        ),
    },
];



export default class BooksList extends Component {
    constructor(){
        super()
        this.state = {
            page:1,
            pageSize:10,
            free:0,
            group:1,
            finish:0,
            sortId:"",
            booksList:[]
        }
    }
    render() {
        let {booksList} = this.state;
        return (
            <Table columns={columns} dataSource={booksList} />
        )
    }
    async componentDidMount() {
        let {page,pageSize,free,group,finish,sortId} = this.state;
        let data = await booksListApi(page,pageSize,free,group,finish,sortId);

        console.log(data.data.bookList);



        this.setState({
            booksList:data.data.bookList
        })
    }
}