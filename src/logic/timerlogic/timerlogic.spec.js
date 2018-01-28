import {Timer} from "./timerlogic";
it('starts without crashing', () => {
    var timer = new Timer(this);
        expect(timer).not.toBe(undefined);
  });

  jest.useFakeTimers();
  
  it('starts timer by 3 seconds and expect 3 counts', () => {
    var timer = new Timer(()=>{});
    timer.onMessage("start");
    jest.advanceTimersByTime(3000);
    expect(timer.seconds).toBe(3);
  });
  
  it('pause timer', () => {
    var timer = new Timer(()=>{});
    timer.onMessage("start");
    jest.advanceTimersByTime(3000);
    timer.onMessage("pause");
    jest.advanceTimersByTime(10000);
    expect(timer.seconds).toBe(3);
  });


  it('resume timer', () => {
    var timer = new Timer(()=>{});
    timer.onMessage("start");
    jest.advanceTimersByTime(3000);
    timer.onMessage("pause");
    jest.advanceTimersByTime(10000);
    expect(timer.seconds).toBe(3);
    timer.onMessage("start");
    jest.advanceTimersByTime(9000);
    expect(timer.seconds).toBe(12);
  });
