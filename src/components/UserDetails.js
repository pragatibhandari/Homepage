import React from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

function UserDetails({ users }) {
  const { id } = useParams();

  const ids = Number(id);

  return (
    <>
      <Link to="/">
        <p>Go Back</p>
      </Link>
      <Card className="user-details" key={users.id}>
        {users
          .filter((user) => user.id === ids)
          .map((user) => (
            <Card.Body className="mt-10" style={{ alignItems: "center" }}>
              <Card.Title>- name: {user.name}</Card.Title>
              <Card.Title>- username: {user.username}</Card.Title>
              <Card.Title>- email: {user.email}</Card.Title>
              <Card.Title>- phone: {user.phone}</Card.Title>
              <Card.Title>- company: {user.company.name}</Card.Title>
              <Card.Title>- website: {user.website}</Card.Title>
              <Card.Title>- address:</Card.Title>
              <ul aria-label="-address:">
                <Card.Title>
                  <li>street: {user.address.street}</li>
                </Card.Title>
                <Card.Title>
                  <li>suite: {user.address.suite}</li>
                </Card.Title>
                <Card.Title>
                  <li>city: {user.address.city}</li>
                </Card.Title>
                <Card.Title>
                  <li>zipcode: {user.address.zipcode}</li>
                </Card.Title>
              </ul>
            </Card.Body>
          ))}
      </Card>
    </>
  );
}

export default UserDetails;