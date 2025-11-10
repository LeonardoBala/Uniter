"use client";

import { useParams } from 'next/navigation'; // 👈 Import useParams
import Link from 'next/link';

export default function Meeting() {
  const params = useParams();
  // params will be: { id: '...' } (whatever value is in the URL)

  return (
    <div>
      {/* 👇 Access the 'id' property from the params object */}
      <h1>Meeting: {params.id}</h1>
    </div>
  );
}