const EventUtils =  {
  posXY(e: MouseEvent) {
    return  {
      x: e.pageX,
      y: e.pageY
    }
  }
}

export default EventUtils