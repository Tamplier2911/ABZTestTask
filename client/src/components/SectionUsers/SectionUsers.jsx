// import "./SectionUsers.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectUsersCollection,
  selectUsersNextUri,
} from "../../redux/users/users.selectors";
import { fetchMoreUsersStart } from "../../redux/users/users.actions";

// components
import HeadlineMedium from "../HeadlineMedium/HeadlineMedium";
import HeadlineSmall from "../HeadlineSmall/HeadlineSmall";
import Button from "../Button/Button";
import UserCard from "../UserCard/UserCard";

// js rendering css
import {
  SectionUsersContainer,
  SectionUsersTop,
  SectionUsersMid,
  SectionUsersBot,
} from "./SectionUsersStyles";

// constants
import usersConstants from "./SectionUsersConstants";

const SectionUsers = ({ users, fetchMoreUsersStart, nextPage }) => {
  const { title, subtitle, btn } = usersConstants;
  return (
    <SectionUsersContainer>
      <SectionUsersTop>
        <HeadlineMedium text={title} />
        <HeadlineSmall text={subtitle} />
      </SectionUsersTop>
      <SectionUsersMid>
        {users.map((user) => {
          return <UserCard {...user} key={user.id} />;
        })}
      </SectionUsersMid>
      <SectionUsersBot>
        <Button
          type={"button"}
          text={btn}
          disabled={nextPage ? false : true}
          action={() => {
            fetchMoreUsersStart(nextPage);
          }}
        />
      </SectionUsersBot>
    </SectionUsersContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  users: selectUsersCollection,
  nextPage: selectUsersNextUri,
});

export default connect(mapStateToProps, { fetchMoreUsersStart })(
  React.memo(SectionUsers)
);
