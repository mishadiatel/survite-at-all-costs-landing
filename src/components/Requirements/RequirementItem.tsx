import React from 'react';
import {ReqItem, ReqItemBody, ReqItemHeading} from './RequirementItem.styled';

interface IReqItemProps {
    heading: string;
    body: string;
    isLast?: boolean;
}
const RequirementItem: React.FC<IReqItemProps> = ({heading, body, isLast}) => {
    return (
        <ReqItem style={{gridColumn: isLast ? 'span 2' : ''}}>
            <ReqItemHeading>{heading}</ReqItemHeading>
            <ReqItemBody>{body}</ReqItemBody>
        </ReqItem>
    );
};

export default RequirementItem;
