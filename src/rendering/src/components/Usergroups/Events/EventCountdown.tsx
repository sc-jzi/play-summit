import { useEffect, useState } from 'react';
import { ComponentProps } from 'lib/component-props';
import React from 'react';
import { useCountdown } from './CalculateCountdown';

export type NextEventProps = ComponentProps & {
    fields: {
        Date: {
            value: string
        },
        Title: {
            value: string,
        }
    }
};

const EventCountdown = (props: NextEventProps): JSX.Element => {

    const sxaStyles = `${props.params?.styles || ''}`;
    console.log(props);

    var targetDate = new Date(props.fields.Date.value);
    console.log("Target date: " + targetDate);

    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    }, [])

    return (
        <div className={`next-event container ${sxaStyles}`}>
            <div className="next-event-left">
                <p>Countdown</p>
                <p>to the {props.fields.Title.value} usergroup</p>
            </div>
            {hydrated &&
                <div className="next-event-right">
                    <div className="next-event-days">
                        <div>
                            <p>{days}</p>
                        </div>
                        <div>
                            <p>Days</p>
                        </div>
                    </div>
                    <div className="next-event-hours">
                        <div>
                            <p>{hours}</p>
                        </div>
                        <div>
                            <p>Hours</p>
                        </div>
                    </div>
                    <div className="next-event-minutes">
                        <div>
                            <p>{minutes}</p>
                        </div>
                        <div>
                            <p>Minutes</p>
                        </div>
                    </div>
                    <div className="next-event-seconds">
                        <div>
                            <p>{seconds}</p>
                        </div>
                        <div>
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export const Default = EventCountdown;
