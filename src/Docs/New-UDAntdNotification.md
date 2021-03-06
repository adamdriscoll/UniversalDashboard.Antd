---
external help file: UniversalDashboard.Antd-help.xml
Module Name: UniversalDashboard.Antd
online version:
schema: 2.0.0
---

# New-UDAntdNotification

## SYNOPSIS
{{ Fill in the Synopsis }}

## SYNTAX

```
New-UDAntdNotification [[-Id] <String>] [[-UpdateKey] <String>] [[-ClassName] <String>]
 [[-CustomCloseButton] <Object>] [[-Duration] <Int32>] [[-Icon] <Object>] [[-Description] <Object>]
 [[-Title] <Object>] [[-OnClose] <Object>] [[-Style] <Hashtable>] [[-TitleStyle] <Hashtable>]
 [[-Placement] <String>] [[-Preset] <String>] [-Visible] [<CommonParameters>]
```

## DESCRIPTION
{{ Fill in the Description }}

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -ClassName
A class name for the control use this to style the control using UDTheme.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomCloseButton
Add custom close button to the notification.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Notification description.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 6
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Duration
How long the notification will appear in seconds, if set to 0 will not disapear.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Icon
Custom icon for the notification.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Id
The id of the control if not specified it will auto generate a guid.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnClose
Callback function that is fired when the user changes the slider's value.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 8
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Placement
Set notification position.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Accepted values: topLeft, topRight, bottomLeft, bottomRight

Required: False
Position: 11
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Preset
Set notification with buildin icon.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Accepted values: success, error, warning, info

Required: False
Position: 12
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Style
Callback function that is fired when the user changes the slider's value.

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: 9
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Title
The notification title.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 7
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TitleStyle
Callback function that is fired when the user changes the slider's value.

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: 10
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UpdateKey
The id of the control if not specified it will auto generate a guid.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Visible
Display the notification

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### UDAntd.Notification

## NOTES

## RELATED LINKS
