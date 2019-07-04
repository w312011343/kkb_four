//
//  JacobUploadFile.m
//  NFCTest
//
//  Created by jacob on 2019/7/4.
//  Copyright © 2019 CNmark. All rights reserved.
//

#import "JacobUploadFile.h"

@implementation JacobUploadFile

/**
 zip文件上传

 @param urlStr 服务器url地址
 @param filePath 要传递的文件路径
 @param fileName 服务器字段名
 */
- (void)uploadZipFileWithUrlStr:(NSString *)urlStr
                       filePath:(NSString *)filePath
                       fileName:(NSString *)fileName
                       callback:(void (^)(NSURLResponse *response, NSData *data, NSError *error))callback {
    
    [self uploadZipFileWithUrlStr:urlStr filePath:filePath fileName:fileName param:nil callback:callback];
}

/**
 zip文件上传

 @param urlStr 服务器url地址
 @param filePath 要传递的文件路径
 @param fileName 服务器字段名
 @param param 其他需要上传的参数
 */
- (void)uploadZipFileWithUrlStr:(NSString *)urlStr
                       filePath:(NSString *)filePath
                       fileName:(NSString *)fileName
                          param:(NSDictionary *)param
                       callback:(void (^)(NSURLResponse *response, NSData *data, NSError *error))callback {
    // request
    NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:urlStr]];
    request.HTTPMethod = @"POST";
    [request setValue:@"multipart/form-data; boundary=----WebKitFormBoundaryt1121CNjacob1121" forHTTPHeaderField:@"Content-Type"];
    
    // body
    NSData *httpBody = [self handleHttpBodyWithFilePath:filePath fileName:fileName param:param];
    
    // session
    [[[NSURLSession sharedSession] uploadTaskWithRequest:request
                                                fromData:httpBody
                                       completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
                                           callback(response, data, error);
    }] resume];
}

- (NSData *)handleHttpBodyWithFilePath:(NSString *)filePath
                              fileName:(NSString *)fileName
                                 param:(NSDictionary *)param {
    
    NSMutableData *httpBodyData = [NSMutableData data];
    
    // start
    [httpBodyData appendData:[self dataWithStr:@"------WebKitFormBoundaryt1121CNjacob1121"]];
    [httpBodyData appendData:[self newLineData]];
    
    // zip file
    NSString *zipfileContent = [NSString stringWithFormat:@"Content-Disposition: form-data; name=\"%@\"; filename=\"%@\"", fileName, [filePath lastPathComponent]];
    [httpBodyData appendData:[self dataWithStr:zipfileContent]];
    [httpBodyData appendData:[self newLineData]];
    
    [httpBodyData appendData:[self dataWithStr:@"Content-Type: application/zip"]];
    [httpBodyData appendData:[self newLineData]];
    [httpBodyData appendData:[self newLineData]];
    NSData *zipfileData = [NSData dataWithContentsOfURL:[NSURL URLWithString:filePath]];
    [httpBodyData appendData:zipfileData];
    [httpBodyData appendData:[self newLineData]];
    [httpBodyData appendData:[self newLineData]];
    
    // param
    if (param && param.count > 0) {
        [httpBodyData appendData:[self dataWithStr:@"------WebKitFormBoundaryt1121CNjacob1121"]];
        [httpBodyData appendData:[self newLineData]];
        
        [param enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull key, id  _Nonnull obj, BOOL * _Nonnull stop) {
            
            NSString *keyStr = [NSString stringWithFormat:@"Content-Disposition: form-data; name=\"%@\"", key];
            [httpBodyData appendData:[self dataWithStr:keyStr]];
            [httpBodyData appendData:[self newLineData]];
            [httpBodyData appendData:[self newLineData]];
            
            NSString *valueStr = [NSString stringWithFormat:@"%@", obj];
            [httpBodyData appendData:[self dataWithStr:valueStr]];
            
            [httpBodyData appendData:[self newLineData]];
        }];
    }
    
    // end
    [httpBodyData appendData:[self dataWithStr:@"------WebKitFormBoundaryt1121CNjacob1121--"]];
    
    return httpBodyData;
}

- (NSData *)dataWithStr:(NSString *)dataStr {
    return [dataStr dataUsingEncoding:NSUTF8StringEncoding];
}

- (NSData *)newLineData {
    return [self dataWithStr:@"\r\n"];
}

@end
