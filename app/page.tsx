"use client";
import React, { useState, useEffect } from 'react';
import { socket } from '../socket';
import { Events } from "./Events";
import { ConnectionState } from './ConnectionState';
import { ConnectionManager } from './ConnectionManager';
import PlayerCard from "./playerCard";


export default function Home() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      setFooEvents([...fooEvents, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);

  return (
    <main>
      <h1>MAIN</h1>
      <ConnectionState isConnected={ isConnected } />
      <Events events={ fooEvents } />
      <ConnectionManager />
      <PlayerCard />
    </main>
  );
}
