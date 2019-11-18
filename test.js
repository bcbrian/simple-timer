function maybeLater(cb) {
  /**Do some things */
  // cb("I did a thing")

  const a = cb();
  console.log(a);
}

maybeLater(function() {
  // console.log(message)
  return "hi";
});
