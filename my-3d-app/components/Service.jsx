"use client";
import { physic } from "@/service/Physic";
import React, { useRef, useEffect, useState } from "react";

const Service = () => {
	const containerRef = useRef(null);
	const [hasOpenComponentCalled, setHasOpenComponentCalled] = useState(false);
	useEffect(() => {
		if (!hasOpenComponentCalled) {
			physic();
			setHasOpenComponentCalled(true);
		}
	}, [hasOpenComponentCalled]);
	return <canvas className="webgl" ref={containerRef}></canvas>;
};

export default Service;
