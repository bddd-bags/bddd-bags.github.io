import React from "react";
import Level from "./Level";
import { Card } from "react-bootstrap";
import oponents from "./opponents.json";

const opponents = () => {
  const filterOpponents = oponents.filter((e) => e.level == "GRAND MASTER");
  return (
    <>
      <h4 className="text-white h4-fs mb-3">CHOOSE YOUR OPPONENT</h4>
      <Level />
      <div className="mt-3">
        {filterOpponents.length > 0 ? (
          <div className="card-style">
            {filterOpponents.map((e) => {
              return (
                <Card className="card-style-player" style={{ width: "14rem" }}>
                  <Card.Body className="card-layout">
                    <div className="d-flex">
                      <img
                        src={e.avatar}
                        alt="player"
                        className="rounded-circle"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <div className="d-flex flex-wrap justify-content-center">
                        <Card.Title className="card-name text-center">
                          {e.name}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted card-level">
                          {e.level}
                        </Card.Subtitle>
                      </div>
                    </div>
                    <Card.Text className="card-bio my-2">{e.bio}</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted card-history">
                      Since Desember 13, 2021
                    </Card.Subtitle>
                    <button className="fight">FIGHT</button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        ) : (
          <div>kosong</div>
        )}
      </div>
    </>
  );
};

export default opponents;
