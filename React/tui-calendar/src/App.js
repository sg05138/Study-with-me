import React, { useCallback, useEffect, useRef, useState } from "react";

import Calendar from "@toast-ui/react-calendar";
import { ISchedule, ICalendarInfo } from "tui-calendar";

import "./App.css";
import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

import myTheme from "./myTheme";
import { exportNamedDeclaration } from "@babel/types";

const start = new Date();
const end = new Date(new Date().setMinutes(start.getMinutes() + 30));

const schedules = [
    {
        calendarId: "1",
        category: "time",
        isVisible: true,
        title: "Study",
        id: "1",
        body: "Test",
        start,
        end,
    },
    {
        calendarId: "2",
        category: "time",
        isVisible: true,
        title: "Meeting",
        id: "2",
        body: "Description",
        start: new Date(new Date().setHours(start.getHours() + 1)),
        end: new Date(new Date().setHours(start.getHours() + 2)),
    },
];

const calendars = [
    {
        id: "1",
        name: "My Calendar",
        color: "#ffffff",
        bgColor: "#9e5fff",
        dragBgColor: "#9e5fff",
        borderColor: "#9e5fff",
    },
];

function App() {
    const cal = useState(useRef(null));
    const [nowMonth, setNowMonth] = useState();

    const onClickSchedule = useCallback((e) => {
        console.log(e);
    }, []);

    const onBeforeCreateSchedule = useCallback((scheduleData) => {
        console.log(scheduleData);

        const schedule = {
            id: String(Math.random()),
            title: scheduleData.title,
            isAllDay: scheduleData.isAllDay,
            start: scheduleData.start,
            end: scheduleData.end,
            category: scheduleData.isAllDay ? "allday" : "time",
            dueDateClass: "",
            location: scheduleData.location,
            raw: {
                class: scheduleData.raw["class"],
            },
            state: scheduleData.state,
        };

        cal.current.calendarInst.createSchedules([schedule]);
    }, []);

    const onBeforeDeleteSchedule = useCallback((res) => {
        console.log(res);

        const { id, calendarId } = res.schedule;

        cal.current.calendarInst.deleteSchedule(id, calendarId);
    }, []);

    const onBeforeUpdateSchedule = useCallback((e) => {
        console.log(e);

        const { schedule, changes } = e;

        cal.current.calendarInst.updateSchedule(schedule.id, schedule.calendarId, changes);
    }, []);

    function _getFormattedTime(time) {
        const date = new Date(time);
        const h = date.getHours();
        const m = date.getMinutes();

        return `${h}-${m}`;
    }

    function _getTimeTemplate(schedule, isAllDay) {
        var html = [];

        if (!isAllDay) {
            html.push("<strong>" + _getFormattedTime(schedule.start) + "</strong> ");
        }
        if (schedule.isPrivate) {
            html.push('<span class="calendar-font-icon ic-lock-b"></span>');
            html.push(" Private");
        } else {
            if (schedule.isReadOnly) {
                html.push('<span class="calendar-font-icon ic-readonly-b"></span>');
            } else if (schedule.recurrenceRule) {
                html.push('<span class="calendar-font-icon ic-repeat-b"></span>');
            } else if (schedule.attendees.length) {
                html.push('<span class="calendar-font-icon ic-user-b"></span>');
            } else if (schedule.location) {
                html.push('<span class="calendar-font-icon ic-location-b"></span>');
            }
            html.push(" " + schedule.title);
        }

        return html.join("");
    }

    const templates = {
        time: function (schedule) {
            console.log(schedule);
            return _getTimeTemplate(schedule, false);
        },
    };

    const changeView = (type) => {
        cal.current.calendarInst.changeView(type, true);
    };

    const collapse = () => {
        document.querySelector(".App").style.width = "1000px";
    };

    const expand = () => {
        document.querySelector(".App").style.width = "100%";
    };
    function moveToNextOrPrevRange(val) {
        if (val === -1) {
            cal.current.calendarInst.prev();
        } else if (val === 1) {
            cal.current.calendarInst.next();
        }
        console.log(cal.current.calendarInst.getDate());

        var tzDate = cal.current.calendarInst.getDate();
        var date = new Date(tzDate);

        setNowMonth(date.getMonth() + 1);
    }
    useEffect(() => {
        var tzDate = cal.current.calendarInst.getDate();
        var date = new Date(tzDate);
        console.log(date.getMonth() + 1);

        setNowMonth(date.getMonth() + 1);
        cal.current.calendarInst.changeView("month", true);
    }, []);
    return (
        <div className="App">
            <h1>{nowMonth}</h1>

            {/* <button onClick={() => expand()}>확대</button>
            <button onClick={() => collapse()}>축소</button> */}
            <button onClick={() => moveToNextOrPrevRange(1)}>다음이용</button>
            <button onClick={() => moveToNextOrPrevRange(-1)}>이전이에용이용</button>

            <Calendar
                ref={cal}
                height="800px"
                defaultView="month"
                useCreationPopup={true}
                useDetailPopup={true}
                template={myTheme}
                calendars={calendars}
                schedules={schedules}
                taskView={false}
                onClickSchedule={onClickSchedule}
                onBeforeCreateSchedule={onBeforeCreateSchedule}
                onBeforeDeleteSchedule={onBeforeDeleteSchedule}
                onBeforeUpdateSchedule={onBeforeUpdateSchedule}
            />
        </div>
    );
}

export default App;
