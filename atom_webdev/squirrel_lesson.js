let journal = [];

function addEntry(events,squirrel)
{
  journal.push({events, squirrel});
}

addEntry(["work","touched tree","pizza","running","television"],false);

function deepEqual(value1,value2)
{
  console.log(typeof value1);
  console.log(typeof value2); //for testing
}
