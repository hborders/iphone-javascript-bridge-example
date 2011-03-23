//
//  MobileTwitterAppDelegate.m
//  MobileTwitter
//
//  Created by Heath Borders on 3/22/11.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import "MobileTwitterAppDelegate.h"
#import "TweetsListViewController.h"

@implementation MobileTwitterAppDelegate


@synthesize window = _window;

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    self.window.rootViewController = [[[TweetsListViewController alloc] init] autorelease];
    [self.window makeKeyAndVisible];
    return YES;
}

- (void)dealloc
{
    self.window = nil;
    [super dealloc];
}

@end
