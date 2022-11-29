#include "FunctionalSwitch.h"
#include <iostream>

@implementation FunctionalNSSwitch

- (void)setCallback:(std::function<void(void)>)cb
{
  // self.action = @selector(handleSelection:);
  callback = cb;
//  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(handleSelection:) name:NSPopUpButtonWillPopUpNotification object:nil];
//  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(handleSelection:) name:NSControlTextDidChangeNotification object:nil];
}

// - (void)handleSelection:(NSMenuItem*)item
// {
//   callback();
// }

- (void)handleValue:(NSSwitch*)item
{
  callback();
}

@end
