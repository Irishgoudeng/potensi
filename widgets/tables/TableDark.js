// import node module libraries
import React from 'react';
import Link from 'next/link';
import { MoreVertical } from 'react-feather';
import { Badge, Card, Dropdown, Image, Table } from 'react-bootstrap'

// import required sub component
import { AvatarGroup, Avatar } from 'components/bootstrap/Avatar';

const TableDark = ({ TableData }) => {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <Link
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            className="text-muted text-primary-hover"
        >
            {children}
        </Link>

    ));
    CustomToggle.displayName = 'CustomToggle';
    const ActionMenu = () => {
        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle}>
                    <MoreVertical size="15px" className="text-secondary" />
                </Dropdown.Toggle>
                <Dropdown.Menu align={'end'}>
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    };
    return (
        <Card >
            <Card.Header >
                <h4 className="mb-1">Table Dark</h4>
                <p className="mb-0">Just add the base class <code className="highlighter-rouge">.table-dark</code> to any
                    <code className="highlighter-rouge">&lt;table&gt;</code>, then extend with custom styles.</p>
            </Card.Header>
            <Table responsive className="table-dark text-nowrap mb-0">
                <thead className="table-dark">
                    <tr>
                        <th className='text-white'>Project name</th>
                        <th className='text-white'>Due Date</th>
                        <th className='text-white'>Priority</th>
                        <th className='text-white'>Members</th>
                        <th className='text-white'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {TableData.map((item, index) => {
                        return (<tr key={index}>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <div>
                                            <Image src={item.logo} alt="" className={item.className} />
                                        </div>
                                    </div>
                                    <div className="ms-3 lh-1">{item.project_name}</div>
                                </div>
                            </td>
                            <td>{item.due_date}</td>
                            <td><Badge bg={item.badge}>{item.priority}</Badge></td>
                            <td>
                                <AvatarGroup className="me-2">
                                    {item.members.slice(0, 3).map((member, index) => {
                                        return <Avatar key={index} size="sm" src={member.avatar} type="image" className="rounded-circle" />
                                    })}
                                    <Avatar
                                        size="sm"
                                        type="initial"
                                        name={item.members.length - 3 + '+'}
                                        variant="primary"
                                        className="rounded-circle"
                                        showExact
                                    />
                                </AvatarGroup>
                            </td>
                            <td>
                                <ActionMenu />
                            </td>
                        </tr>)
                    })}
                </tbody>
            </Table>
        </Card>
    )
}

export default TableDark