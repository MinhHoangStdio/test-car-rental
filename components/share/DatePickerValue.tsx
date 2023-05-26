import React, { useEffect, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import moment from 'moment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';

export default function DatePickerValue() {
  const currentTime = moment();
  const tomorrow = currentTime.add(1, 'days');

  const [fromDate, setFromDate] = useState<any>(new Date());
  const [fromTime, setFromTime] = useState<any>(new Date());
  const [toDate, setToDate] = useState<any>(tomorrow);
  const [toTime, setToTime] = useState<any>(new Date());

  let nextDateString = '';
  if (fromDate) {
    const currentDate = new Date(fromDate);
    if (!isNaN(currentDate.getTime())) {
      currentDate.setDate(currentDate.getDate() + 1);
      nextDateString = currentDate.toISOString().slice(0, 10);
    }
  }

  const min =
    moment(new Date()).format('YYYY-MM-DD') === moment(fromDate).format('YYYY-MM-DD')
      ? currentTime
      : false;

  useEffect(() => {
    console.log({ now: moment(new Date()).format('YYYY-MM-DD') });
    console.log({ choose: moment(fromDate).format('YYYY-MM-DD') });
    console.log({ minTime: min, fromDate, toDate, nextDateString });
  });
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={fromDate}
          onChange={(value: any) => {
            if (value && value['$d']) {
              console.log(moment(value['$d']).format('YYYY-MM-DD'));
              setFromDate(moment(value['$d']).format('YYYY-MM-DD'));
            } else {
              setFromDate('');
            }
          }}
          renderInput={(params: any) => (
            <TextField
              {...params}
              inputProps={{
                ...params.inputProps,
              }}
              helperText="Please choose valid date"
              placeholder="DD/MM/YYYY"
            />
          )}
          disablePast={true}
          inputFormat="DD/MM/YYYY"
        />
        <span> - </span>
        <TimePicker
          value={fromTime}
          minTime={min}
          ampm={false}
          minutesStep={1}
          onChange={(newValue: any) => {
            setFromTime(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DatePicker
          value={toDate}
          onChange={(value: any) => {
            if (value && value['$d']) {
              console.log(moment(value['$d']).format('YYYY-MM-DD'));
              setToDate(moment(value['$d']).format('YYYY-MM-DD'));
            } else {
              setToDate('');
            }
          }}
          renderInput={(params: any) => (
            <TextField
              {...params}
              inputProps={{
                ...params.inputProps,
              }}
              helperText="Please choose valid date"
              placeholder="DD/MM/YYYY"
            />
          )}
          disablePast={true}
          inputFormat="DD/MM/YYYY"
          minDate={nextDateString}
        />
        <TimePicker
          value={toTime}
          ampm={false}
          minutesStep={1}
          onChange={(newValue: any) => {
            setToTime(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}
